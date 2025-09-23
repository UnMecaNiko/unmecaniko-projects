---
title: "CNC Magia Roja v2 – Upgraded Control and Mechanics"
version: "2.0.0"
last_updated: "2025-09-22"
audience: ["humans","agents"]
description: "Second version of the CNC Magia Roja, featuring an improved control system, active cooling for the drivers, an 80W (10W optical) laser with air assist, and a robust mechanical structure for high precision."

slug: "cnc-magiaRoja-v2"
categories: ["Electronics & Hardware","Robotics"]
status: "active"
role: ["Author","Engineer"]
team: ["Nicolas Velasquez Lopez", "Saul Velasquez Velasquez"]

date_start: "2024-06-01"
date_end: ""

tech: ["GRBL Controller","TMC2209 Drivers","NEMA 17","Helical Screw","LightBurn","80W Laser","Air Assist"]
tags: ["CNC","Engraving","Laser","Fabrication","Prototyping","Workshop"]

cover: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image2.jpg"
gallery:
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image1.jpg"
    caption: "CNC Magia Roja v2"
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image2.jpg"
    caption: "Close-up of the control board and drivers."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image3.jpg"
    caption: "80W laser head with air assist."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image4.jpg"
    caption: "View of the reinforced mechanical structure."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image5.jpg"
    caption: "Wiring and electronic components."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image6.jpg"
    caption: "Another angle of the machine."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image7.jpg"
    caption: "Details of the axes with helical screw."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image8.jpg"
    caption: "Machine in action."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image9.jpg"
    caption: "Full view of the CNC."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image10.jpg"
    caption: "The CNC in the workshop."
videos: 
  - provider: "youtube"
    id: "PLy-GjmDeoE"
    title: "CNC Magia Roja v2 Demo"

links:


impact:
  highlights:
    - "High-precision motion system with helical screws instead of belts."
    - "80W laser with FAC technology and air assist for clean and fast cuts."
    - "Cooled motor drivers for sustained and quiet performance."
    - "Functional design with an eye protection dome and smoke extraction system."
  metrics:
    - name: "Working Area"
      value: "40x40"
      unit: "cm"
    - name: "Laser Power"
      value: "80W (10W optical)"
      unit: ""
    - name: "Weight"
      value: 25
      unit: "Kg"

seo_title: "CNC Magia Roja v2 – Technical Specifications and Design"
seo_description: "Version 2 of the aluminum-frame CNC, now with an 80W laser with air assist, cooled drivers, and a 40x40 cm working area. Designed for high precision and material versatility."

license: "Public"
confidentiality: "Public"
---

## Overview
This project is the second iteration of the **CNC Magia Roja**, a desktop CNC machine built by a father-son entrepreneurial team. This version features significant improvements to the control systems, mechanics, and laser capabilities. While key components like the control board and drivers are maintained, upgrades such as active cooling and an external air-assist system for the laser have been added, increasing reliability and cut quality.

As a team of entrepreneurs, my father, Saul, and I decided to build this second version to create a more powerful and precise machine for our business. He led the mechanical design, while I focused on the electronics and control systems.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image2.jpg"
       alt="Close-up of the control board and drivers."
       title="Close-up of the control board and drivers."
       width="60%">
</p>


## My Contribution
As the electronics lead on this project, my contributions focused on optimizing the machine's control systems:

- **Control Optimization**: I tuned and configured the GRBL firmware for the existing board, ensuring stable and precise operation.
- **Electronics Enhancements**: I implemented an assisted ventilation system for the motor drivers and control area, ensuring consistent performance during long work sessions.
- **Laser and Air-Assist Integration**: I managed the integration of the 80W laser head and the installation of an external air pump to cool the material, achieving cleaner and more precise cuts.
- **Wiring and Safety**: I was responsible for the complete wiring, component selection, and implementation of safety systems like the emergency stop and overload protection.

## History

Building on the success of the first version, we developed the CNC Magia Roja v2 as a business upgrade. Our goal was to overcome previous limitations and improve overall precision and performance to expand our production capabilities.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image4.jpg"
       alt="View of the reinforced mechanical structure."
       title="View of the reinforced mechanical structure."
       width="60%">
</p>

One of the key improvements was the implementation of an air-assist system. This, along with the laser's FAC compression technology, allows us to engrave and cut a wide range of materials with clean finishes.

My father, with his expertise in mechanics, designed a motion system based on **helical screws and linear bushings**, replacing belts to offer superior precision and consistency. He also reinforced key structural components to minimize flex, which is crucial for maintaining accuracy at high speeds.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image5.jpg"
       alt="Wiring and electronic components."
       title="Wiring and electronic components."
       width="60%">
</p>

The design also incorporates important functional features, such as a red acrylic dome for eye protection, a smoke extraction system, and a honeycomb cutting grill.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v2/image7.jpg"
       alt="Details of the axes with helical screw."
       title="Details of the axes with helical screw."
       width="60%">
</p>

## Technical Specifications

- **Dimensions**: 44cm (height) x 69cm (width) x 75cm (length)
- **Weight**: 25 Kg
- **Structural Materials**: 1045 steel, extruded aluminum, 18-gauge steel sheet, 5mm red translucent acrylic.
- **Working Area**: 400 x 400 mm
- **Laser Power**: 80W input, 10W optical output, with FAC compression technology.
- **Applications**: Engraving and cutting on paper, cardboard, foam, leather, fabric, acrylic, wood, glass, ceramic, tile, anodized aluminum, and stainless steel.

## Design and Advantages

- **Mechanical Design**: X/Y axes with stepper motors and helical screws, reinforced with linear bushings for maximum precision.
- **Protection and Safety**: Acrylic dome for eye protection, emergency stop, and overload protection.
- **Cooling**: Air-assist system for the material, ventilation for the control area, and active cooling for the drivers.
- **Functionality**: Compact design that allows working on surfaces larger than the machine itself, with internal LED lighting and a smoke extraction system.

## Architecture / Stack
- **Motion Control**: GRBL control board with cooled TMC2209 drivers and NEMA 17 motors.
- **Mechanics**: Reinforced aluminum and steel structure with X/Y axes on helical screws and linear bushings.
- **Tooling**: 80W (10W optical) laser head with air assist.
- **Software**: Compatible with LightBurn and LaserGRBL, with direct USB connection.
- **Work Surface**: Honeycomb cutting grill.

## Maintenance
- **Monthly**: Lubricate the helical screw and linear bushings.
- **Weekly**: Clean the laser lens with alcohol and a cotton swab.

## Results
- **Clean and Precise Cuts**: The air-assist system and integrated ventilation ensure high-quality finishes.
- **High Precision**: The helical screw-based mechanics offer superior consistency and precision compared to belt systems.
- **Reliable Operation**: Cooling of key electronic components allows for stable performance during prolonged use.
- **Entrepreneurial Success**: This upgrade allowed us to produce higher quality products more efficiently, directly benefiting our business.


---
Thanks for reading! I am Nicolas Velasquez Lopez (@unmecaniko), passionate about knowledge and always giving my best in every project. If you have a big idea, a question, or just want to share something, feel free to reach out!
