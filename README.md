# Digitalizing Solomon Islands

A static web report that presents a strategic workshop synthesis from Honiara, 4–5 December 2025: moving from fragmented digitalization toward whole-of-government digital transformation.

This repository is the source for that page. It is **not** an official United Nations or Government of Solomon Islands publication. UN DESA and the Government of Solomon Islands convened the workshop; Dr Non Arkaraprasertkul produced this report page from workshop facilitation outputs, sector discussions, and UNDESA toolkit synthesis.

**Live page:** [https://nonarkara.github.io/solomon-islands-workshop/](https://nonarkara.github.io/solomon-islands-workshop/)

## What this is

The page is a lightweight, mobile-first narrative of the workshop outcome: an implementation-oriented roadmap rather than a minutes document. It covers:

1. **Executive mandate** — transformation versus digitized paperwork; Once-Only service logic; national coordination with local inclusion
2. **Connectivity** — infrastructure reach, coverage metrics, and challenge/opportunity pairs
3. **Sector priorities** — finance, health, justice, police/maritime, and foreign affairs
4. **UNDESA toolkits** — National E-Government Toolkit and Local Government Toolkit (LOSI), plus workshop quick wins
5. **Data governance and AI** — classification, sharing, and legislative fast-track items discussed in the room
6. **Institutions** — coordination architecture and human-centered change logic
7. **Three-phase roadmap** — foundation (0–12 months), integration (1–3 years), transformation (3+ years)
8. **Gallery** — curated Honiara workshop and place photographs
9. **Downloads** — workshop agenda, concept note, and related reference files when present in the deploy bundle

The HTML footer states the provenance directly: *Prepared from workshop facilitation outputs, sector discussions, and UNDESA toolkit synthesis. Honiara, Solomon Islands, December 2025.*

## Who it was for

The workshop brought together Solomon Islands Government counterparts and UN DESA on a whole-of-government trajectory (the page cites Policy 8.1.7). This page is a public-facing synthesis for participants, ministries, and partners who need a shareable, low-bandwidth record of the Honiara discussion—not a substitute for official UN or SIG documents.

## How to view

| Path | Use |
| --- | --- |
| [GitHub Pages](https://nonarkara.github.io/solomon-islands-workshop/) | Canonical public URL |
| Open `index.html` after a local Vite build | Offline / review copy |
| `npm run dev` | Local development server |

The page is intentionally static: HTML and CSS only, no JavaScript required for reading. That choice is documented on the page itself for weak-connectivity island contexts.

### Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

```bash
npm run build
npm run preview
```

builds a production bundle to `dist/` and serves it locally.

Pushes to `main` also trigger GitHub Pages (`./.github/workflows/deploy.yml`) and Cloudflare Pages (`./.github/workflows/cloudflare-pages.yml`, project name `solomon-islands-workshop`).

## Produced by

**Dr Non Arkaraprasertkul** ([Nonarkara](https://github.com/Nonarkara)) produced this report page. The on-page technical note records that it was built with Codex and manually edited by the workshop team.

UN DESA toolkits and Solomon Islands Government workshop materials are referenced as sources. Their appearance here does **not** imply endorsement, co-authorship, or official status from the United Nations, UN DESA, or the Government of Solomon Islands.

## Repository notes

- `index.html` is the full report (structure, copy, and styles).
- `src/main.js` is a no-op stub; the page does not depend on client JavaScript.
- `public/story-images/` holds the curated gallery stills used on the page.
- `public/downloads/` holds workshop documents. Large media (PDF, PNG, video, audio) is gitignored and kept outside the repository; those links work on the deployed site when the files are present in the publish bundle.
- `curate_photos.js` and `generate_curation_preview.cjs` are local photo-curation helpers, not part of the public report.

## License

This repository’s source is released under the [MIT License](LICENSE). Workshop photographs, UNDESA toolkit names, and linked government or UN documents remain subject to their original rights holders. The MIT grant covers the code and page composition in this repo, not third-party marks or official publications.
