import type { AstroInstance } from "astro";
import { getCollection } from "astro:content";

const members = await getCollection("members");
const cardComponents: Record<string, AstroInstance> = import.meta.glob("/src/cards/*/card.astro", {
    eager: true,
});

export type SiteMeta = (typeof members)[number]["data"];
export interface MemberSite {
    meta: SiteMeta;
    card: AstroInstance["default"];
}

export const memberSites: MemberSite[] = Object.entries(cardComponents)
    .map(([path, component]) => {
        const id = path.split("/").slice(-2, -1)[0]!;
        const member = members.find((m) => m.id === id);
        if (!member) throw new Error(`Member with ID ${id} not found`);
        return {
            meta: member.data,
            card: component.default,
        };
    })
    .sort((a, b) => {
        const aIndex = members.findIndex((m) => m.id === a.meta.id);
        const bIndex = members.findIndex((m) => m.id === b.meta.id);
        return aIndex - bIndex;
    });
