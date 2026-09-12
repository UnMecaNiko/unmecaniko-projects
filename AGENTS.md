# AGENTS.md — rules for this repository

This repository is the **public content layer** of my portfolio. It holds the
project write-ups that [unmecaniko.com](https://www.unmecaniko.com) renders, and
nothing else.

Internal knowledge — professional history, business notes, infrastructure,
planning, career tracking — lives in a **separate private repository** and must
never be copied here.

## Rules

1. **Public by definition.** Everything committed here is published. No secrets,
   no credentials, no private paths, no client or financial detail, no personal
   contact data beyond what is already on the public profile.
2. **English only**, both content and file names. The audience is international.
3. **The front-matter is a contract.** The website parses it with `gray-matter`
   and renders its fields. Do not rename or drop fields casually; a mistake here
   breaks a live page. Start from [context/project-template.md](context/project-template.md).
4. **Folder names are public URLs.** `projects/<slug>/` becomes
   `unmecaniko.com/projects/<slug>`. Renaming a folder breaks external links.
5. **Never invent data.** Unknowns are marked explicitly:
   `> PENDING: <what is missing and how to get it>`. No invented dates, figures,
   certifications, metrics, or specifications.
6. **No heavy files.** Images and video go to external storage (Supabase Storage,
   YouTube) and are referenced by URL from the front-matter.
7. **Changes go live in ~5 minutes**, without a deploy. Treat every commit to
   `projects/` as a production change.

## Adding a project

Copy [context/project-template.md](context/project-template.md) to
`projects/<slug>/index.md`, fill in the complete front-matter using the fixed
category list, write the body in English, and add a row to the table in
[README.md](README.md).
