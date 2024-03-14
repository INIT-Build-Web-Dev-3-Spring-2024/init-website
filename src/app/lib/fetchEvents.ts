import { Client } from "@notionhq/client";
import {
    QueryDatabaseResponse,
    PageObjectResponse,
    PartialPageObjectResponse,
    PartialDatabaseObjectResponse,
    DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Event } from "./definitions";

// Notion Database Reference: https://smyvens.notion.site/smyvens/b1c5ddd386bb4abcaab264d630246d99?v=d340036c928e40bea2ac68c41c3d5461
export default async function fetchEvents(weekly = false) {
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
                    this_week: {},
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
                    page:
                        | PageObjectResponse
                        | PartialPageObjectResponse
                        | PartialDatabaseObjectResponse
                        | DatabaseObjectResponse
                ) => {
                    if ("properties" in page) {
                        let name = "Unnamed Event";
                        let date: Date | string = "Date TBD";
                        let location = "Location TBD";
                        let description = "Description TBD";
                        let lumaLink = "Link TBD";
                        let imageLink = "Image TBD";
                        let program = "General";

                        // Check and extract the 'Project name' property
                        const titleProperty = page.properties["﻿Project name"]; // `Project name` on Notion database has an invisible character for some reason
                        if (
                            titleProperty?.type === "title" &&
                            Array.isArray(titleProperty.title) &&
                            titleProperty.title.length > 0
                        ) {
                            name = titleProperty.title[0].plain_text;
                        }

                        // Check and extract the 'Date' property, & store it as a Date object
                        const dateProperty = page.properties["Date"];
                        if (dateProperty?.type === "date" && dateProperty.date) {
                            date = new Date(dateProperty.date.start);
                        }

                        // Check and extract the 'Location' property
                        const locationProperty = page.properties["Location"];
                        if (
                            locationProperty?.type === "rich_text" &&
                            Array.isArray(locationProperty.rich_text) &&
                            locationProperty.rich_text.length > 0
                        ) {
                            location = locationProperty.rich_text[0].plain_text;
                        }

                        // Check and extract the 'Description' property
                        const descriptionProperty = page.properties["Description"];
                        if (
                            descriptionProperty?.type === "rich_text" &&
                            Array.isArray(descriptionProperty.rich_text) &&
                            descriptionProperty.rich_text.length > 0
                        ) {
                            description = descriptionProperty.rich_text[0].plain_text;
                        }

                        // Check and extract the 'Luma' property
                        const lumaProperty = page.properties["Luma"];
                        if (lumaProperty?.type === "url" && typeof lumaProperty.url === "string") {
                            lumaLink = lumaProperty.url;
                        }

                        // Check and extract the 'Picture' property
                        const pictureProperty = page.properties["Picture"];
                        if (
                            pictureProperty?.type === "files" &&
                            Array.isArray(pictureProperty.files) &&
                            pictureProperty.files.length > 0 &&
                            "file" in pictureProperty.files[0]
                        ) {
                            imageLink = pictureProperty.files[0].file.url;
                        }

                        // Check and extract the "Role" property, will be used to get the program
                        const programProperty = page.properties["Role"];
                        if (
                            programProperty?.type === "rich_text" &&
                            Array.isArray(programProperty.rich_text) &&
                            programProperty.rich_text.length > 0 &&
                            "text" in programProperty.rich_text[0]
                        ) {
                            // Extract property from notion, and match against our regex
                            const programMatch: RegExpMatchArray | null =
                                programProperty.rich_text[0].text.content.match(regex);

                            // If a program is found (Reach, Build, etc.), then store the name in `program`
                            if (programMatch) {
                                program = programMatch[0];
                            }
                        }

                        const event: Event = {
                            id: page.id,
                            name,
                            date,
                            location,
                            description,
                            lumaLink,
                            imageLink,
                            program,
                        };
                        events.push(event);
                    }
                }
            );
        }

        return events;
    } catch (error) {
        console.error("Failed to fetch latest event data:", error);
    }
}
