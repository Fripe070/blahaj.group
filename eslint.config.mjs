// @ts-check
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";
import importSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import ts from "typescript-eslint";

export default defineConfig(
    { ignores: ["dist/", ".astro/", "bun.lockb"] },
    js.configs.recommended,
    ts.configs.recommended,
    ts.configs.stylistic,
    prettier,
    astro.configs.recommended,
    {
        plugins: {
            "simple-import-sort": importSort,
            "unused-imports": unusedImports,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
);
