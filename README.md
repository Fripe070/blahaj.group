A small showcase site for a close-knit community of developer friends.

The group site is built using [Astro](https://astro.build/) and is meant to give members tools to show off their websites and projects.

## Developing

### Getting Started

To get started, clone the repository and run the following commands. If you plan to contribute, consider forking the repository first and cloning your fork.

```sh
npm install
npm run dev
```

<details>
<summary><code>bun</code> version</summary>

```sh
bun install
bun run dev
```

</details>

It is recommended to use [VS Code](https://code.visualstudio.com/) with the preconfigured extensions for the best development experience.

### Joining

> [!WARNING]
> The group site is currently under active development and the below information might not be up-to-date.
> If trouble arises adding yourself to the site, please open an issue.

1. **Add yourself to [`members.json`](src/members.json)**

    ```json
    {
        "id": "site_id",
        "owner": "Your Name",
        "url": "https://your.website"
    }
    ```

    IDs must be unique and consist of lowercase alphanumeric characters (underscores are allowed).
    We recommend using a lowercase version of your site's name or domain.

2. **Create your card**

    Create a file at `src/cards/<site_id>/card.astro`, replacing `<site_id>` with the ID specified in `members.json`.

    The card file is an [Astro component](https://docs.astro.build/en/basics/astro-components/) that can be customized as desired. At its most basic, it looks like this:

    ```astro
    ---
    import type { SiteMeta } from "@/scripts/sites";

    interface Props {
        meta: SiteMeta;
    }
    const { meta } = Astro.props;
    ---

    <div class="bg-background-alt flex items-center justify-center">
        <a href={meta.url} class="text-blue-500 hover:underline">
            {meta.url}
        </a>
    </div>
    ```

    Website cards need to meet certain criteria to be accepted. See the [Guidelines and requirements](#guidelines-and-requirements) section for more information.

### Before committing:

- Run `npm run fix` to apply automatic formatting and linting fixes, and report any linting errors.
- Run `npm run test` to verify that all tests pass.

## Guidelines and requirements

- **Acceptance Criteria:**
  To be accepted into the group site, your website should:
    - Be publicly accessible and (at least largely) functional.
    - Be your own creation or a project you significantly contribute to.
    - Pass the vibe check (i.e., be appropriate, relevant and respectful).
    - If you have multiple sites, each should be distinct. You can for instance not have cards for multiple of your personal portfolios or blogs.

- **Navigation:**
  Cards **must** include an accessible way to navigate to the website they represent.
  This can be through a link, button, or another interactive element.

- **File Structure:**
  Keep all files related to your card within your own directory.
  Changes outside your directory will undergo more rigorous review before merging.

- **Libraries:**
  External libraries can be added if needed, but they will receive extra scrutiny during review.

- **Card Bounds:**
  Cards should generally stay within their container's bounds, though minor overflow can be acceptable.
  If content overflows excessively and disrupts other cards, the changes may be reverted.

- **Static Rendering:**
  The website is statically rendered at build time, so dynamic behavior must be handled with client-side JavaScript or omitted entirely.
