---
title: "DomiChat – WhatsApp Delivery Agent for Rural Communities"
version: "1.0.0"
last_updated: "2025-09-10"
audience: ["humans","agents"]
description: "WhatsApp agent that connects delivery riders with rural communities, bringing essential services to thousands of underserved communities."

slug: "domichat"
categories: ["AI","Cloud","Business"]
status: "active"
role: ["Cloud and AI Architect"]
team: ["Nicolas Velasquez Lopez","Luis Bilbao","Felipe Uribe Guevara","Maria Alejandra Ortiz Velasquez","Manuel Alberto Torres Vergara"]

date_start: "2024-09-07"
date_end: ""

tech: ["Revolution API","Gemini","n8n","Supabase","V0","Vercel"]

cover: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/cover.jpg"
gallery:
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image1.jpg"
    caption: "WhatsApp chat demo requesting a delivery"
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image2.jpg"
    caption: "Domichat lowers the barrier for rural users without extra apps"
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image3.jpg"
    caption: "Team building the MVP during the Colombia Tech Week hackathon"
videos: []

links:
  demo: "https://www.domichat.com.co/"
  repo: "https://github.com/DomiChat/domichat-landing-front"
  post_1: "https://www.linkedin.com/posts/unmecaniko_resulta-que-este-s%C3%A1bado-y-domingo-estuve-activity-7365920878741651456-cQYc"
  post_2: "https://www.linkedin.com/posts/unmecaniko_qu%C3%A9-estuve-haciendo-estas-%C3%BAltimas-24-horas-activity-7365437714457890816-t4Gb"

impact:
  highlights:
    - "Lets anyone order deliveries through text or voice on WhatsApp."
    - "Removes the need for separate apps, saving mobile data for rural users."
    - "MVP built in 24 hours during Colombia Tech Week's AI hackathon."
  metrics:
    - name: "Hackathon build time"
      value: 24
      unit: "hours"

seo_title: "DomiChat – WhatsApp Delivery Agent for Rural Communities"
seo_description: "WhatsApp-based agent that connects delivery riders with rural communities, built in a 24-hour hackathon to close the accessibility gap."

license: "MIT"
confidentiality: "Public"
---

## Overview
Domichat is a WhatsApp-based assistant that matches delivery riders with people living in towns and rural areas. Users can type or send a voice note with what they need, and registered riders receive the request to accept or counteroffer. Orders start within minutes, and the customer can wait comfortably at home.

## My Contribution
I served as the cloud and AI architect. I execute the delivery messaging flow, optimizing the flows in n8n, and set up the infrastructure to scale. I also helped making the ptch video for the judges of the hackaton.

## Process
<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image1.jpg"
       alt="Domichat landing page"
       title="Domichat landing page"
       width="50%">
</p>

Domichat is a solution implemented on WhatsApp that connects delivery riders and users in towns and villages. You can message the official chat or simply send an audio asking for what you need; once the details are confirmed, a notification goes out to registered riders so they can accept or counteroffer. In minutes your order kicks off and you can wait comfortably at home.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image2.jpg"
       alt="Domichat workflow"
       title="Domichat workflow"
       width="50%">
</p>

Domichat solves the accessibility issues of big delivery platforms while implementing a solution that needs no extra app, reducing mobile data usage and closing the tech gap for older people.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/domichat/image3.jpg"
       alt="Domichat team"
       title="Domichat team"
       width="50%">
</p>
The idea sprouted in Manuel Torres’s mind, who had been working on it for weeks, and it was during the AI hackathon organized by Colombia Tech Week and sponsored by Habi that in 24 hours it fully took shape and came to life. For 24 straight hours, Luis, Manuel, Felipe, Mar, and I worked on the MVP—we made it, nearly landing in the top 3 solutions.

We’ll keep working on Domichat so thousands of people can access safe and reliable deliveries.

## Architecture / Stack
- Revolution API for WhatsApp chat and audio messages.
- V0 front-end deployed on Vercel.
- Gemini models for natural language and voice processing.
- N8N orchestrating the request workflow.

- Supabase for user and order data.

## Results
- Accessible delivery channel for communities without mainstream apps.
- Reduced mobile data usage and simpler onboarding for older users.
- Near top-three finish at the hackathon, motivating further development.