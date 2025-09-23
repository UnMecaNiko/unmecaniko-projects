# GitHub Copilot Instructions

## Repository Overview
This is Nicolas Velasquez Lopez's (@unmecaniko) living portfolio - a structured documentation system for showcasing projects across AI, robotics, cloud computing, electronics, and business. The repository serves both humans (portfolio navigation) and AI agents (structured knowledge consumption).

## Project Structure & Patterns

### Core Architecture
- **`/projects/`**: Each project lives in its own folder with a canonical `index.md`
- **`/context/`**: Meta-documentation including templates, about info, and repository context
- **YAML front-matter**: All markdown files use structured metadata (see `context/project-template.md`)
- **External media**: Images/videos hosted on Supabase Storage and YouTube, referenced via URLs

### Project Documentation Pattern
Every project follows the template in `context/project-template.md`:
```yaml
# Standard front-matter structure
slug: "unique-project-slug"
categories: ["AI","Cloud"]  # Fixed taxonomy
status: "active|archived|prototype|ended"
tech: ["Python","Supabase","n8n"]
date_start: "YYYY-MM-DD"
cover: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/..."
```

### Content Guidelines
- **Language**: English only for consistency
- **Voice**: First person for personal projects ("I built", "My contribution")
- **Structure**: Overview → My Contribution → Process → Architecture/Stack → Results
- **Media**: Always include captions and alt text; use Supabase CDN URLs

## Key Workflows

### Adding New Projects
1. Copy `/context/project-template.md` → `/projects/<slug>/index.md`
2. Fill front-matter metadata completely
3. Upload media to Supabase Storage (follow existing URL patterns)
4. Update main `README.md` projects table
5. Ensure project follows the narrative structure

### Media Management
- **Images**: Host on Supabase Storage at `https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/<slug>/`
- **Videos**: YouTube embeds using nocookie.com domain
- **File naming**: `cover.jpg`, `image1.jpg`, `image2.jpg`, etc.

### Content Conventions
- **Categories**: Use fixed taxonomy: AI, Robotics, Cloud, Electronics & Hardware, Programming, Business, Education
- **Status values**: active, archived, prototype, ended
- **Team format**: Full names in array format
- **Impact metrics**: Use structured `highlights` and `metrics` arrays

## Technical Context

### MCP Server (`context/main.py`)
- FastMCP-based server for AI agent integration
- Loads all `.md` files recursively for context provision
- Excludes README.md from agent access
- Provides `list_files()` and `get_file(filename)` tools

### Dependencies & External Services
- **Supabase**: Media storage and potentially data backend
- **Vercel**: Frontend deployment platform
- **YouTube**: Video hosting for demos
- **GitHub**: Source control and portfolio hosting

## Developer Guidelines

### When Working on Projects
- Always maintain the front-matter structure - it's consumed by external systems
- Include specific technical details in "Architecture/Stack" sections
- Document measurable impact in the Results section
- Keep narrative flow: problem → solution → implementation → outcome

### Content Quality Standards
- Include code/technical examples when relevant to the project
- Use centered images with proper sizing: `<p align="center"><img ... width="50%"></p>`
- Maintain consistent date formatting (YYYY-MM-DD)
- Ensure all external links work and use proper protocols

### Multi-audience Awareness
Remember this content serves:
- **Portfolio visitors**: Need clear project value and Nicolas's contributions
- **AI agents**: Need structured metadata and technical context
- **Potential collaborators**: Need architecture and technical depth

## Context Files Priority
When understanding project patterns, reference these key files in order:
1. `context/project-template.md` - Standard structure
2. `context/repository-context.md` - Overall architecture
3. `projects/domichat/index.md` - Example AI/business project
4. `projects/cnc-magiaRoja-v1/index.md` - Example hardware project