---
title: "CNC Magia Roja v3 – Motorized Z and 30W Optical Laser"
version: "1.0.0"
last_updated: "2026-09-12"
audience: ["humans","agents"]
description: "Third-generation desktop CNC built with my father: 500 × 500 mm work envelope, motorized Z, interchangeable laser/milling head, and a Laser Tree K30 30W optical diode laser. Mechanics complete; motion and laser control already running."

slug: "cnc-magiaRoja-v3"
categories: ["Electronics & Hardware","Robotics"]
status: "active"
role: ["Author","Engineer"]
team: ["Nicolas Velasquez Lopez", "Saul Velasquez Velasquez"]

date_start: "2026"
date_end: ""

tech: ["GRBL","Arduino","CNC Shield","DRV8825","NEMA 17","Laser Tree K30","LightBurn","LaserGRBL"]
tags: ["CNC","Laser","Fabrication","Prototyping","Workshop","Desktop CNC"]

cover: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/cover.png"
gallery:
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/machine-open.png"
    caption: "Product render of Magia Roja v3 with the red acrylic lid open, based on the real machine."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/workshop-front.jpg"
    caption: "The real machine in the workshop — black cabinet, honeycomb bed, and Laser Tree K30."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/workshop-angle.jpg"
    caption: "Three-quarter view of the finished mechanics, with emergency stop and exhaust hose."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/k30-engraving.jpg"
    caption: "Product render: Laser Tree K30 engraving wood on the honeycomb bed."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/materials.jpg"
    caption: "Product render of intended materials: wood, paper, leather, dark acrylic, and surface marking."
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/mural-art.jpg"
    caption: "Product render of layered wood mural pieces cut on the machine."
videos: []

links:
  demo: "https://velasquezlopez.com"

impact:
  highlights:
    - "First Magia Roja with a motorized Z axis and a designed interchangeable laser/milling head."
    - "Measured XY envelope of 505 × 490 mm (nominal 500 × 500 mm) and 85 mm of Z travel."
    - "Laser Tree K30 at 30W optical output — about 3× the optical power of v2."
    - "Homing on X, Y, and Z and a first pine accuracy test were running by 2026-08-17."
  metrics:
    - name: "Nominal work area"
      value: "500×500"
      unit: "mm"
    - name: "Measured XY envelope"
      value: "505×490"
      unit: "mm"
    - name: "Optical laser power"
      value: 30
      unit: "W"
    - name: "Measured Z travel"
      value: 85
      unit: "mm"

seo_title: "CNC Magia Roja v3 – Desktop Laser CNC with Motorized Z"
seo_description: "Third-generation father-son desktop CNC: 500 × 500 mm work area, motorized Z, Laser Tree K30 30W optical laser, and an interchangeable head. Mechanics complete; control already running."

license: "Public"
confidentiality: "Public"
---

## Overview

CNC Magia Roja v3 is the current machine in a three-generation desktop CNC line that my father, Saul, and I design and build. It cuts and engraves with a **Laser Tree K30** (30 W optical, 450 nm, integrated air assist) on a **500 × 500 mm** nominal work area. For the first time in the line it also has a **motorized Z axis** and a frame designed for an interchangeable milling head.

The brand that sells the machine is **VELO inc**. The commercial landing is live at [velasquezlopez.com](https://velasquezlopez.com). Earlier machines are documented here: [v1](https://www.unmecaniko.com/projects/cnc-magiaRoja-v1) and [v2](https://www.unmecaniko.com/projects/cnc-magiaRoja-v2).

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/machine-open.png"
       alt="Product render of CNC Magia Roja v3 with the lid open"
       title="CNC Magia Roja v3"
       width="80%">
</p>

## My Contribution

I own electronics, electrical design, and control. Saul owns mechanical design and the physical build.

- Selected and integrated the **Laser Tree K30** on its own 24 V / 5 A supply, separate from the 12 V / 10 A control rail.
- Kept the proven **Arduino + CNC Shield + GRBL** platform and moved the drivers to **DRV8825** at 1/8 microstepping.
- Wired normally-closed limit switches on all three axes, including Z+ on D12, and brought **`$H` homing** online — Z first, then X/Y.
- Measured the real travel and locked soft limits at **505 × 490 × 80 mm** (Z travel is 85 mm, with 5 mm of margin).
- Connected the K30 PWM/TTL signal, added interior LED lighting on the 12 V rail, and ran the first **pine accuracy test** at 3000 mm/min and 85% power.
- Built the commercial landing for VELO inc.

## Process

v1 (2021–2024) started as a tutorial-inspired aluminum CNC and ended up running more than eight hours a day. v2 (2024–2026) replaced belts with a stiffer motion system and a cooled controller; **we sold that machine in 2026**. v3 exists because that sale validated the line and left the bench empty for a larger, more capable successor.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/workshop-front.jpg"
       alt="CNC Magia Roja v3 in the workshop, front view"
       title="Workshop photo — front"
       width="80%">
</p>

Saul finished the mechanics first: a larger black cabinet, aluminum gantry, linear guides, honeycomb bed, and the K30 already mounted. I started the electronics in July 2026. By 17 August 2026 the machine was no longer just a frame — homing, soft limits, the laser signal, and a clean accuracy pattern on pine were working.

Electronics is still the active phase. Cable drag chains, a dual-rail emergency stop, and the milling-motor pick are still open. The milling head is **designed into the machine**; the motor model is not selected yet, so I do not treat rotary cutting as a finished capability.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/workshop-angle.jpg"
       alt="CNC Magia Roja v3 in the workshop, three-quarter view"
       title="Workshop photo — three-quarter"
       width="80%">
</p>

## Technical Specifications

Only values measured on this machine or taken from the K30 datasheet are listed. Unknowns stay unmarked rather than guessed.

| Item | Value |
| --- | --- |
| Nominal work area | 500 × 500 mm |
| Measured XY envelope (soft limits) | 505 × 490 mm |
| Measured Z travel | 85 mm (soft limit 80 mm) |
| Motion | X, Y, and motorized Z — NEMA 17 on every axis |
| Laser | Laser Tree K30, 30 W optical, 450 nm, integrated air assist |
| Laser supply | Dedicated 24 V / 5 A |
| Control supply | 12 V / 10 A |
| Controller | Arduino + CNC Shield, GRBL firmware |
| Drivers | DRV8825, 1/8 microstepping |
| Homing | X, Y, and Z — normally-closed switches; `$H` raises Z first |
| Work surface | Honeycomb bed |
| Enclosure | Black cabinet, red acrylic lid, interior LED strip, exhaust hose |
| Software | GRBL senders: LightBurn, LaserGRBL |
| External size / weight | > PENDING: height and mass have not been recorded |

The K30 manufacturer also publishes single-pass cutting depths (pine 20 mm, plywood 15 mm, acrylic 30 mm). Those are **vendor figures**, not cuts I have logged on this machine yet.

## Architecture / Stack

- **Mechanics:** desktop cabinet with an aluminum gantry, linear guides, honeycomb bed, and a head mount designed to swap the laser for a rotary milling motor.
- **Laser:** Laser Tree K30 on its own 24 V rail, with the air-assist hose that ships on the module.
- **Control:** Arduino running GRBL on a CNC Shield; three DRV8825 drivers; PWM/TTL into the shield's spindle pin so laser mode (`$32=1`) can vary power.
- **Limits:** NC switches, Y− and Y+ in series on the same input, Z+ on D12 so hardware PWM stays free for the laser.
- **Power:** two rails on purpose — 12 V for motion, lighting, and control; 24 V only for the laser.
- **Interface:** USB to any GRBL sender. No closed cloud lock-in.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/cnc-magiaRoja-v3/k30-engraving.jpg"
       alt="Product render of the K30 engraving a wood plaque"
       title="K30 engraving render"
       width="80%">
</p>

## Results

- The third machine in a line that already produced daily work (v1) and sold to a customer (v2).
- A real work envelope around **half a square meter**, with motorized focus/depth instead of a fixed-height head.
- Optical laser power moved from ~10 W on v2 to **30 W** on the K30.
- Control is past the first bring-up: three-axis homing, measured soft limits, and a pine accuracy test at 3000 mm/min / 85% that produced a clean pattern.
- A public product page is online at [velasquezlopez.com](https://velasquezlopez.com), with a six-month maintenance plan of three included services.

> PENDING: record external height and weight; confirm X/Y transmission type on the physical machine; pick and mount the milling motor; replace application renders with photographs of parts actually made on v3.

---
Thanks for reading! I am Nicolas Velasquez Lopez (@unmecaniko), passionate about knowledge and always giving my best in every project. If you have a big idea, a question, or just want to share something, feel free to reach out!
