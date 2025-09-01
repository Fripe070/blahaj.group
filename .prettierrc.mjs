// @ts-check

/** @type {import('prettier').Config} */
export default {
    useTabs: false,
    tabWidth: 4,
    printWidth: 100,

    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
        {
            files: "*.{yml,yaml}",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.svg",
            options: {
                parser: "html",
            },
        },
    ],
};
