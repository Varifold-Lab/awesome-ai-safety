# Course documentation website

The course is a learning project of the [Varifold community](https://varifold-lab.github.io/), alongside [LeanMFG](https://varifold-lab.github.io/LeanMFG/). Its public URL is `https://varifold-lab.github.io/awesome-ai-safety/`.

The site follows LeanMFG's three-column reading layout and uses Next.js static export, GitHub-flavored Markdown, and KaTeX. The community homepage lives in the separate `Varifold-Lab/varifold-lab.github.io` repository. This repository owns only the course site.

## Content

The public reading order follows concepts and prerequisites. `notes/Reading Guide.md` and `notes/reading/` supply the edited topic articles; `lib/content.ts` defines their navigation and suggested reading sequence. The home page offers entry points by reader goal and attributes the originating course with Fields Institute and YouTube links. Lecture numbering and chronology remain in the source archive linked from the homepage.

The topic articles remove spoken fillers, repeated explanations, logistics, and course numbering while retaining definitions, calculations, examples, assumptions, and unresolved questions. Additional mathematical exposition states its assumptions and links to primary references. The original source Markdown is preserved. In source pages, `build-content.mjs` puts the complete text after `Full lecture text` inside a closed native disclosure; it remains in the exported HTML and search index. The section anchor stays outside the disclosure for table-of-contents navigation.

Search defaults to the edited content. The “Include source archive” checkbox also searches original captions, handouts, course indexes, and the original weekly research seeds.

Edit the original Markdown in `Lectures/`, `notes/`, `projects/`, and `relatedpapers/`; the root `README.md` supplies the course-information page. Do not maintain a second copy inside `docs/`.

Write notes around the concepts themselves. Keep ordinary source links, but do not add video playback timestamps, timestamped video links, or introductory narration about where a passage appears in a recording.

`scripts/build-content.mjs` discovers all Markdown in those directories, converts it to HTML, rewrites relative Markdown links to website routes, and builds the search index and table of contents. Raw HTML in Markdown is not executed. Use `$…$` and `$$…$$` for mathematics. Templates are also readable on the website.

Lecture filenames beginning with `Lecture NN -` receive stable `/docs/lectures/lecture-NN/` routes. Other routes follow their source paths; topic articles use `/docs/reading/`. Adding a source updates search and adjacent-lecture links. For changes to the public reading path, home-page summaries, or top-level navigation, edit `app/page.tsx` or `lib/content.ts`.

## Development

Use the Node version in the root `.node-version`, then:

```sh
cd docs
npm ci
npm run dev
```

Markdown is compiled before the server starts. After editing Markdown during a development session, run `npm run content` in another terminal; Next.js will reload the generated content. `NEXT_PUBLIC_LAB_URL` optionally overrides the community homepage link for a combined local preview.

## Validate the production build

```sh
NEXT_PUBLIC_BASE_PATH=/awesome-ai-safety npm run build
NEXT_PUBLIC_BASE_PATH=/awesome-ai-safety npm run typecheck
```

The build fails on unresolved Markdown links or malformed formulas, and checks the exported pages, internal links, anchors, and local assets. Output is in `out/`; generated content and build output are ignored by Git.

## Deployment

The repository's `Course documentation` GitHub Actions workflow builds pull requests and deploys pushes to `main`. In **Settings → Pages**, use **GitHub Actions** as the source. It publishes `docs/out/` with base path `/awesome-ai-safety`. No custom domain or server is needed.
