A small webring composed of a group of developer friends.

The site is built using [Astro](https://astro.build/) and aimed at providing customisability to its members.

## Developing

### Getting Started

Clone the repository and run the following commands

```sh
bun install
bun run dev
```

<details>
<summary>npm</summary>

```sh
npm install
npm run dev
```

</details>
It is recommended that you use VS Code with the configured extensions for the best development experience.

### Joining the ring

1. **Add yourself to [`members.json`](src/members.json)**

    ```json
    {
        "id": "site_id",
        "owner": "Your Name",
        "url": "https://your.website"
    }
    ```

    IDs should be unique and can be any string, but it's recommended to use a lowercase version of your site's or your own name.

2. **Create your card**

    Create a file at `src/cards/site_id/card.astro`, replacing `site_id` with the previously specified site ID.

    The card file is an [astro component](https://docs.astro.build/en/basics/astro-components/), and can be customised however you want. In its most basic form, it can look like this:

    ```astro
    ---
    import type { CardMeta } from "@/scripts/cards";

    interface Props {
        meta: CardMeta;
    }
    const { meta } = Astro.props;
    ---

    <div class="bg-background-alt flex h-full w-full items-center justify-center">
        <a href={meta.url} class="text-blue-500 hover:underline">
            {meta.url}
        </a>
    </div>
    ```

### Before committing:

- Run `bun run fix` to apply automatic formatting and linting fixes, and report any linting errors.
- Run `bun run test` to verify that all tests pass.

## Guidelines and requirements

- **Redirecting:**
  Cards are _**required**_ to in some way allow the user to go to the site they represent.
  This can be through a link, button, or another interactive element.
  For consistency, the URL should be obtained from the `meta` prop passed to the card component.

- **Static Context:**
  The website is rendered on the server once at build time, so any dynamic behavior must be implemented using client-side JavaScript, or entirely left out.

- **File Structure:**
  Keep any files related to your card within your own directory. Any changes outside of your own directory will be more rigorously reviewed before being merged.

- **Libraries:**
  External libraries may be added to the project if desired, but will require approval before being merged.

- **Card bounds:**
  Cards are expected to stay roughly inside their container's bounds, but may leak outside a bit for stylistic purposes.
  If card content leaks too far outside of its container and disrupts other members, a decision may be made to revert the changes.
