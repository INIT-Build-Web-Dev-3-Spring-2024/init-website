import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
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
        const events = [];
        if (response.results.length > 0) {
            response.results.map((page) => {
                const event: Event = {
                    id: page.id,
                    // `Project name` on Notion database has an invisible character for some reason
                    // TODO: Fix TypeScript type checking errors
                    name: page.properties["﻿Project name"]?.title[0]?.plain_text ?? "Unnamed Event",
                    date: page.properties["Date"]?.date?.start ?? "Date TBD",
                    location: page.properties.Location?.rich_text[0]?.plain_text ?? "Location TBD",
                };
                events.push(event);
            });
        }

        return { events };
    } catch (error) {
        console.error("Failed to fetch latest event data:", error);
        throw new Error("Failed to fetch latest event data:");
    }
}
