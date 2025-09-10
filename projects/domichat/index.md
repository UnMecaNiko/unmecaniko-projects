---
title: "DomiChat – WhatsApp Delivery Agent for Rural Communities"
version: "1.0.0"
last_updated: "2025-09-10"
audience: ["humans","agents"]
description: "WhatsApp agent that connects delivery riders with rural communities."

slug: "domichat"
categories: ["AI","Cloud","Business"]
status: "active"
role: ["Cloud and AI Architect"]
team: ["Nicolas Velasquez Lopez","Luis Bilbao","Felipe Uribe Guevara","Maria Alejandra Ortiz Velasquez","Manuel Alberto Torres Vergara"]

date_start: "2024-09-07"
date_end: ""

tech: ["WhatsApp Cloud API","OpenAI","Python","Supabase"]
tags: ["Hackathon","Rural Delivery"]

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
  post: "https://www.linkedin.com/posts/unmecaniko_resulta-que-este-s%C3%A1bado-y-domingo-estuve-activity-7365920878741651456-cQYc"

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
I served as the cloud and AI architect. I designed the messaging flow, connected the WhatsApp Cloud API with the backend, and set up the infrastructure to scale. I also helped integrate speech-to-text for audio orders and guided the team through deployment.

## Process
The idea came from Manuel Torres, who had been exploring ways to bring delivery services to underserved regions. At the Colombia Tech Week AI hackathon, our five-person team turned his concept into a working MVP in 24 hours. We focused on fast iteration: defining the conversation flow, wiring the notifications for couriers, and validating the user experience with voice commands.

## Architecture / Stack
- WhatsApp Cloud API for chat and audio messages.
- Python services orchestrating the request workflow.
- OpenAI models for natural language and voice processing.
- Supabase for user and order data.

## Results
- Accessible delivery channel for communities without mainstream apps.
- Reduced mobile data usage and simpler onboarding for older users.
- Near top-three finish at the hackathon, motivating further development.

