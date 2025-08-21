import { type MemberSite, memberSites } from "@/scripts/sites";

export function getRingOffset(originId: string, offset: number): MemberSite {
    const currentIndex = memberSites.findIndex((site) => site.meta.id === originId);
    if (currentIndex === -1) throw new Error(`Member site not found: ${originId}`);
    const newIndex = (currentIndex + offset + memberSites.length) % memberSites.length;
    return memberSites[newIndex]!;
}
