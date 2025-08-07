import type { AstroInstance } from "astro";
import { getCollection } from "astro:content";
import { expect, test } from "vitest";

test("Test cards", async () => {
    const members = await getCollection("members");
    const cardComponents: Record<string, AstroInstance> = import.meta.glob(
        "/src/cards/*/card.astro",
        { eager: true },
    );
    expect(
        Object.keys(cardComponents).length,
        "Number of card components does not match number of ring members",
    ).toEqual(members.length);

    const componentIds = Object.keys(cardComponents).map(
        (path) => path.split("/").slice(-2, -1)[0]!,
    );
    expect(
        members.every((member) => componentIds.includes(member.id)),
        "Not all members have a corresponding card component",
    ).toBe(true);
    expect(
        componentIds.every((id) => members.some((member) => member.id === id)),
        "Not all card components have a corresponding member",
    ).toBe(true);
});
