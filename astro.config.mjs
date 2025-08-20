// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    devToolbar: { enabled: false },
    vite: {
        plugins: [tailwindcss()],
    },
    output: "static",
    build: {
        assets: "assets",
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Roboto",
                cssVariable: "--font-roboto",
                subsets: ["latin"],
                styles: ["normal"],
                weights: ["400", "700"],
            },
            {
                provider: fontProviders.google(),
                name: "JetBrains Mono",
                cssVariable: "--font-jetbrains-mono",
                subsets: ["latin"],
                styles: ["normal", "italic"],
                weights: ["400", "700"],
            },
        ],
    },
});
