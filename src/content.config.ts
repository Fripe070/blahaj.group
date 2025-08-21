import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const members = defineCollection({
    loader: file("src/members.json"),
    schema: z.object({
        id: z
            .string()
            .regex(
                /^[a-z0-9_]+$/,
                "Invalid ID format. Needs to be alphanumeric with underscores.",
            ),
        owner: z.string().default("Anonymous"),
        url: z.string().url(),
    }),
});

export const collections = { members };
