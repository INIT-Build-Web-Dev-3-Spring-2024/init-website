import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Event } from "./definitions";

export default async function fetchLatestEvent() {
    try {
        if (!process.env.NOTION_API_KEY || !process.env.NOTION_EVENTS_DATABASE_ID) {
            throw new Error("Required environment variables NOTION_API_KEY or NOTION_EVENTS_DATABASE_ID are not set.");
        }

        const notion = new Client({ auth: process.env.NOTION_API_KEY });
        const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;

        // Get latest event from database
        const response: QueryDatabaseResponse = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Status",
                select: {
                    equals: "In Progress",
                },
            },
            sorts: [
                {
                    property: "Date",
                    direction: "descending",
                },
            ],
            page_size: 1,
        });

        // Return it as an Event object
        if (response.results.length > 0) {
            const page = response.results[0];

            const latestEvent: Event = {
                id: page.id,
                // `Project name` on Notion database has an invisible character for some reason
                // TODO: Fix TypeScript type checking errors
                name: page.properties["﻿Project name"]?.title[0]?.plain_text ?? "Unnamed Event",
                date: page.properties["Date Text"]?.rich_text[0]?.plain_text ?? "Date TBD",
                location: page.properties.Location?.rich_text[0]?.plain_text ?? "Location TBD",
            };
            return { latestEvent };
        }

        return { latestEvent: null };
    } catch (error) {
        console.error("Failed to fetch latest event data:", error);
        throw new Error("Failed to fetch latest event data:");
    }
}
