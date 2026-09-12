# 🚀 Hi, I'm Nicolas Velasquez Lopez (unmecaniko)

I'm a **mechatronics engineer from Colombia** who loves to connect **AI, cloud, robotics, and education**.
I build projects that mix technology with creativity, always aiming for **real-world impact** 💡.
This repository is my **living portfolio**: here you can explore what I've created, learned, and shared along the way.

✨ My philosophy: learn fast, share what you know, and build together.

---

## 🧑‍💻 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/unmecaniko/)
[![Website](https://img.shields.io/badge/Website-243784?logo=google-chrome&logoColor=white)](https://www.unmecaniko.com)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/@unmecaniko)
[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:unmecaniko@gmail.com)

---

## 📂 Projects

Each project lives in its own folder inside `/projects` with a structured `index.md`.
Here's a quick tour of what I've been building 🦾:

| Project | Description | Categories | Status | Link |
| --- | --- | --- | --- | --- |
| **DomiChat** | WhatsApp agent that connects delivery riders with rural communities. | AI, Cloud, Business | Active | [domichat](./projects/domichat/index.md) |
| **This Website** | AI-powered project documentation that feeds unmecaniko.com. | AI, Programming, Cloud | Active | [webpage-projects](./projects/webpage-projects/index.md) |
| **Trajectory Control for Differential Robots** | ROS trajectory control with Gazebo simulation and a Lyapunov controller. | Robotics, Programming | Archived | [control-turtlebot](./projects/control-turtlebot/index.md) |
| **CNC Magia Roja v2** | Upgraded control and mechanics for the CNC engraver and laser. | Electronics & Hardware, Robotics | Ended | [cnc-magiaRoja-v2](./projects/cnc-magiaRoja-v2/index.md) |
| **CNC Magia Roja v1** | DIY CNC engraver and 80W laser cutter built with my dad. | Electronics & Hardware, Robotics | Ended | [cnc-magiaRoja-v1](./projects/cnc-magiaRoja-v1/index.md) |
| **Lapiz Labs** | Robotics and programming education for kids. | Business, Education, Robotics | Ended | [lapizlabs](./projects/lapizlabs/index.md) |
| **Space Call** | International education project connecting classrooms. | Electronics & Hardware, Education | Ended | [spacecall](./projects/spacecall/index.md) |

---

## 📖 Context

The `/context` folder explains how this portfolio is put together:

- Who I am and what I do → [about-unmecaniko.md](./context/about-unmecaniko.md)
- The template for new projects → [project-template.md](./context/project-template.md)

---

## 🔖 Taxonomy (how I organize things)

- **Categories (fixed list):** AI, Robotics, Cloud, Electronics & Hardware, Programming, Business, Education.
- **Tech:** free list of technologies (Python, Supabase, ROS, etc.).
- **Tags:** optional free keywords.
- **Status:** active, prototype, archived, ended.

---

## 🤖 How this repository is consumed

This repository is **content only**. It holds no application code and no private
information — it exists so that humans and agents can read my work from one
structured place.

[unmecaniko.com](https://www.unmecaniko.com) reads `/projects` **live** through
the GitHub API and renders it, so a change to any `index.md` shows up on the site
within about five minutes without deploying anything.

That makes the YAML front-matter of each `index.md` a **contract**:

- The folder name is the public URL slug — renaming a folder changes the URL and
  breaks external links.
- Renaming or removing a front-matter field can break that project's page.
- New projects are added by copying [project-template.md](./context/project-template.md)
  into `projects/<slug>/index.md`, in English, with complete front-matter.

Images and video are **not stored here**. They live in external storage
(Supabase Storage, YouTube) and are referenced by URL from the front-matter.

---

## 🚀 Why this repo?

Because I wanted a **reliable and transparent way** to share my projects.
This repo is:

- A **portfolio for humans** (explore my work).
- A **knowledge base for agents** (structured Markdown, metadata, and context).
- A **source of truth** for my website, which consumes these files and presents
  them visually.

✨ If you're here, you probably love building things too — let's connect!
