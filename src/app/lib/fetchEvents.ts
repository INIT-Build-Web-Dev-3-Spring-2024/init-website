import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Event } from "@/components/EventCard";

// Notion Database Reference: https://smyvens.notion.site/smyvens/b1c5ddd386bb4abcaab264d630246d99?v=d340036c928e40bea2ac68c41c3d5461
export default async function fetchEvents(searchQuery = "", weekly = false) {
  try {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_EVENTS_DATABASE_ID) {
      throw new Error("Required environment variables NOTION_API_KEY or NOTION_EVENTS_DATABASE_ID are not set.");
    }

    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;

    // adjust filter based on 'weekly' parameter
    let dayOrWeekFilter;

    if (weekly) {
      dayOrWeekFilter = {
        property: "Date",
        date: {
          next_week: {},
        },
      };
    } else {
      dayOrWeekFilter = {
        property: "Date",
        date: {
          // get & format today's date to be compatible with Notion API
          equals: new Date().toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        },
      };
    }

    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "In Progress",
            },
          },
          {
            property: "Project Type",
            select: {
              equals: "Event",
            },
          },
          dayOrWeekFilter,
          {
            or: [
              {
                property: "﻿Project name",
                rich_text: {
                  contains: searchQuery,
                },
              },
              {
                property: "Description",
                rich_text: {
                  contains: searchQuery,
                },
              },
              {
                property: "Role",
                rich_text: {
                  contains: searchQuery,
                },
              },
            ],
          },
        ],
      },
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    });

    // Return Event objects
    const events: Array<Event> = [];
    if (response.results.length > 0) {
      const regex = /build|discover|explore|ignite|hack|launch|reach/i; // Used to get program name
      response.results.forEach(
        (
          page: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse
        ) => {
          if ("properties" in page) {
            let name = "Unnamed Event";
            let date = "Date TBD";
            let dateEnd = "Date End TBD";
            let time = "Time TBD";
            let timeEnd = "Time End TBD";
            let location = "Location TBD";
            let description = "";
            let rsvpLink = "RSVP TBD";
            let picture = "/assets/images/eventDefaultImage.avif"; // Default Event Image, can be a link or a local file
            let program = "General";

            // Check and extract the properties from Notion
            const titleProperty = page.properties["﻿Project name"]; // `Project name` on Notion database has an invisible character for some reason
            if (
              titleProperty?.type === "title" &&
              Array.isArray(titleProperty.title) &&
              titleProperty.title.length > 0
            ) {
              name = titleProperty.title[0].plain_text;
            }

            const dateProperty = page.properties["Date"];
            if (dateProperty?.type === "date" && dateProperty.date) {
              // If our date property in Notion is only 10 character's long, it means it doesn't have a specific time
              const timeProvided = dateProperty.date.start.length !== 10;

              const dateObject = timeProvided
                ? new Date(dateProperty.date.start)
                : new Date(`${dateProperty.date.start}T12:00:00.000Z`); // if no time is provided, create date as if time is 12 PM UTC so that the correct day is rendered

              date = dateObject.toLocaleDateString("en-us", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              if (timeProvided) {
                time = dateObject.toLocaleTimeString("en-us", {
                  hour: "numeric",
                  minute: "numeric",
                  timeZoneName: "short",
                });
              }

              // Check if there's an end date and/or time
              if (dateProperty.date.end) {
                const timeEndProvided = dateProperty.date.end.length !== 10;

                const dateEndObject = timeEndProvided
                  ? new Date(dateProperty.date.end)
                  : new Date(`${dateProperty.date.end}T12:00:00.000Z`);

                dateEnd = dateEndObject.toLocaleDateString("en-us", {
                  weekday: "short",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                if (timeEndProvided) {
                  timeEnd = dateEndObject.toLocaleTimeString("en-us", {
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short",
                  });
                }
              }
            }

            const locationProperty = page.properties["Location"];
            if (
              locationProperty?.type === "rich_text" &&
              Array.isArray(locationProperty.rich_text) &&
              locationProperty.rich_text.length > 0
            ) {
              location = locationProperty.rich_text[0].plain_text;
            }

            const descriptionProperty = page.properties["Description"];
            if (
              descriptionProperty?.type === "rich_text" &&
              Array.isArray(descriptionProperty.rich_text) &&
              descriptionProperty.rich_text.length > 0
            ) {
              description = descriptionProperty.rich_text[0].plain_text;
            }

            const lumaProperty = page.properties["Luma"];
            if (lumaProperty?.type === "url" && typeof lumaProperty.url === "string") {
              rsvpLink = lumaProperty.url;
            }

            const pictureProperty = page.properties["Picture"];
            if (
              pictureProperty?.type === "files" &&
              Array.isArray(pictureProperty.files) &&
              pictureProperty.files.length > 0 &&
              "file" in pictureProperty.files[0]
            ) {
              picture = pictureProperty.files[0].file.url;
            }

            const programProperty = page.properties["Role"];
            if (
              programProperty?.type === "rich_text" &&
              Array.isArray(programProperty.rich_text) &&
              programProperty.rich_text.length > 0 &&
              "text" in programProperty.rich_text[0]
            ) {
              // Match role property from Notion against our Regex to get program name
              const programMatch: RegExpMatchArray | null = programProperty.rich_text[0].text.content.match(regex);

              // If a program is found (Reach, Build, etc.), then store the name in `program`
              if (programMatch) {
                program = programMatch[0];
              }
            }

            const event: Event = {
              id: page.id,
              name,
              description,
              picture,
              location,
              program,
              date,
              dateEnd,
              time,
              timeEnd,
              rsvpLink,
            };
            events.push(event);
          }
        }
      );
    }

    console.log(events);
    return events;
  } catch (error) {
    console.error("Failed to fetch latest event data:", error);
  }
}
