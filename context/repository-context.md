---
title: "Repository Context"
version: "1.0.0"
last_updated: "2025-09-08"
audience: ["humans","agents"]
description: "Explains the purpose, structure, and evolution of the projects portfolio repository."
---

# Repository Context

## Purpose & Scope
This repository has been created to showcase the personal and professional projects of **Nicolas Velasquez Lopez (@unmecaniko)**.  
The content stored here will be consumed by a public website that presents the projects in a structured and visual way.  

The repository serves two audiences:  
- **Humans**: for easy navigation, documentation, and portfolio maintenance.  
- **Agents**: as a structured knowledge source for automated consumption, indexing, or AI-powered assistants.  

## Current State
- Projects are documented as Markdown files inside the `/projects` folder.  
- Each project has its own folder and a canonical `index.md` file.  
- A `/template` folder provides a reusable base for creating new project entries.  
- A `/context` folder stores high-level documentation to guide both humans and agents.  
- Media is referenced via external URLs (Supabase Storage for images, YouTube for videos).  

## Future State
- The website will render projects dynamically with support for galleries, videos, and metadata-based filters.  
- Incremental improvements may include:  
  - Automatic JSON indexes of all projects.  
  - Search and filtering by categories, technologies, or tags.  
  - Better integration with external storage/CDN for optimized media delivery.  
  - Versioning and governance documents for long-term consistency.  

## Folder Hierarchy

/projects-portfolio-repo
│
├── README.md # Global index of the repository
│
├── /projects # One folder per project, each with index.md
│ ├── izy/
│ │ └── index.md
│ ├── domichat/
│ │ └── index.md
│ └── ...
│
└── /context
  ├── repository-context.md
  ├── about-unmecaniko.md
  └── project-template.md

## Metadata & Taxonomy
- **Categories (fixed list)**: AI, Robotics, Cloud, Electronics & Hardware, Programming, Business, Education.  
- **Tech**: free list of technologies (e.g. Python, Supabase, ROS).  
- **Tags**: optional free tags for flexibility.  
- **Status**: active, archived, prototype.  

## Media Policy
- **Images**: hosted in Supabase Storage (or equivalent CDN).  
  - Recommended formats: `.jpg` / `.webp`.  
  - Sizes: 1200–2000 px width for covers, 800–1200 px for gallery.  
  - Always include captions and alt text.  
- **Videos**: embedded from YouTube (`youtube-nocookie.com`) for public demos.  
  - Alternative: Vimeo or direct file storage if needed.  

## Evolution & Versioning
- Each context file includes version and last_updated metadata.  
- Breaking changes to structure or taxonomy should be documented here.  
- New project entries should always be created from the template.  

## Constraints
- Do not store secrets, API keys, or personal data in this repository.  
- Media stored locally in the repo must remain under 1 MB (prefer external storage).  
- All content must remain in English for consistency.  

## Update Workflow
1. Copy `/template/project-template.md` into a new folder under `/projects/<slug>/index.md`.  
2. Fill in metadata fields (title, categories, tech, dates, etc.).  
3. Upload media to Supabase Storage or YouTube and reference URLs in the front-matter.  
4. Commit changes and update `README.md` if needed.  

## Writing Style Guide

- **Language**: All content must be written in English.  
- **Tone**: Clear, simple, and approachable. Use professional but friendly wording.  
- **Voice**: First person for personal presentation (e.g., "I built this project"),  
  third person only when describing in a neutral/documentation style.  
- **Formatting**: 
  - Use Markdown headings (`##`) for sections.  
  - Keep sentences short and scannable.  
  - Use bullet points for lists and highlights.  
  - Emojis are allowed in small amounts (favorites: 🚀 💡 🦾 ✨).  
- **Consistency**: Always include front-matter metadata at the top of each file. 

## Future Improvements

The repository will keep evolving with these possible enhancements:

- **Project overview file**: a central index with a chronological list of projects, their status, and relationships.  
- **Automatic README generation**: script to update the projects table using front-matter data.  
- **Media optimization**: better pipelines for image resizing and caching through CDN.  
- **JSON/GraphQL API**: expose project metadata for external consumption beyond the website.  
- **Internationalization**: optional support for Spanish versions of project entries.
- **about-unmecaniko**: Improve the description and add more fields of work keeping a simple but detailed text.


## Appendix
**Glossary**  
- *Slug*: lowercase identifier used in folder names and URLs.  
- *Front-matter*: YAML metadata block at the top of each Markdown file.  
- *ISR*: Incremental Static Regeneration, used by the website to refresh content.  
- *Agent*: automated system or LLM that consumes and interprets this repository.  