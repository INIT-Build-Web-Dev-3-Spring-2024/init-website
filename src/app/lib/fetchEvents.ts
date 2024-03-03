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
                    dayOrWeekFilter,
                ],
            },
            sorts: [
                {
                    property: "Date",
                    direction: "descending",
                },
            ],
        });

        // Return Event objects
        const events: Array<Event> = [];
        if (response.results.length > 0) {
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
                        let date = "Date TBD";
                        let location = "Location TBD";

                        // Check and extract the 'title' property
                        const titleProperty = page.properties["﻿Project name"]; // `Project name` on Notion database has an invisible character for some reason
                        if (
                            titleProperty?.type === "title" &&
                            Array.isArray(titleProperty.title) &&
                            titleProperty.title.length > 0
                        ) {
                            name = titleProperty.title[0].plain_text;
                        }

                        // Check and extract the 'date' property
                        const dateProperty = page.properties["Date"];
                        if (dateProperty?.type === "date" && dateProperty.date) {
                            date = dateProperty.date.start;
                        }

                        // Check and extract the 'rich_text' property
                        const locationProperty = page.properties["Location"];
                        if (
                            locationProperty?.type === "rich_text" &&
                            Array.isArray(locationProperty.rich_text) &&
                            locationProperty.rich_text.length > 0
                        ) {
                            location = locationProperty.rich_text[0].plain_text;
                        }

                        const event: Event = {
                            id: page.id,
                            name,
                            date,
                            location,
                        };
                        events.push(event);
                    }
                }
            );
        }

        console.log(events);
        return { events };
    } catch (error) {
        console.error("Failed to fetch latest event data:", error);
        throw new Error("Failed to fetch latest event data:");
    }
}
