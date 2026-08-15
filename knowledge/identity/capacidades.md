# Capacidades y evidencia

Este documento evita listas de palabras sin contexto. Cada capacidad se expresa
con el nivel que demuestra la evidencia pública disponible al 2026-08-01.

## Fortalezas diferenciales

### Descubrimiento técnico y diseño de soluciones — fuerte

- Dirige sesiones con clientes para entender requisitos, arquitectura y
  objetivos en Truora.
- Diseñó soluciones de nube para cuentas nombradas en Huawei.
- Construye demos y POCs y comunica sus decisiones a públicos técnicos y de
  negocio.
- **Evidencia:** [trayectoria](trayectoria.md) y
  [LinkedIn](https://www.linkedin.com/in/unmecaniko/).

### Comunicación técnica, formación y facilitación — fuerte

- Experiencia enseñando electrónica, programación, robótica y nube.
- Coordinó instructores y currículos en Lápiz Labs.
- Dio webinars y formaciones de IA y Kubernetes para Colombia y Ecuador desde
  Huawei.
- Es mentor y ha participado como jurado de robótica.
- **Evidencia:** [Lápiz Labs](../../projects/lapizlabs/index.md),
  [Space Call](../../projects/spacecall/index.md) y
  [LinkedIn](https://www.linkedin.com/in/unmecaniko/).

### Arquitectura cloud e integración — fuerte

- Diseño bajo criterios de rendimiento, disponibilidad, costo, escalabilidad y
  seguridad.
- Experiencia pública con Huawei Cloud, Kubernetes, despliegues web, APIs,
  Supabase, Vercel, n8n y Docker.
- Puede conectar software empresarial, datos y servicios de IA; esta capacidad
  es relevante para telemetría, operaciones y plataformas de flotas robóticas.
- **Evidencia:** experiencia en Huawei,
  [portafolio automatizado](../../projects/webpage-projects/index.md) y
  documentación de infraestructura del repositorio.

### IA aplicada y automatización — intermedio con proyectos demostrables

- Arquitectura de flujos con LLM, agentes, RAG y automatización.
- DomiChat integra Gemini, WhatsApp, n8n y Supabase.
- Ha desplegado Dify y modelos abiertos en entornos privados de nube.
- Su experiencia se concentra en IA generativa y automatización; no hay todavía
  evidencia pública equivalente en visión, aprendizaje por refuerzo,
  entrenamiento de modelos o *sim-to-real*.
- **Evidencia:** [DomiChat](../../projects/domichat/index.md) y
  [publicación sobre Dify](https://www.linkedin.com/posts/unmecaniko_ai-dify-huaweicloud-activity-7346182748925009921-0Zx9).
- **Atribución:** [dify-unmecaniko](https://github.com/UnMecaNiko/dify-unmecaniko)
  es un fork de `langgenius/dify`; demuestra experimentación o despliegue, no
  autoría del producto. [aid-sdlc](https://github.com/UnMecaNiko/aid-sdlc)
  también figura como fork y no debe presentarse como metodología propia sin
  evidencia adicional.

### Mecatrónica, electrónica y prototipado — intermedio/fuerte

- Integra controladores, motores paso a paso, sensores, microcontroladores,
  cableado, protecciones y actuadores.
- Diseñó e integró la electrónica y el control de CNC funcionales.
- Tiene proyectos públicos de control de motores, adquisición de señales y
  robots seguidores de línea.
- **Evidencia:** [CNC Magia Roja v2](../../projects/cnc-magiaRoja-v2/index.md),
  [controlAvanzadoMotor](https://github.com/UnMecaNiko/controlAvanzadoMotor),
  [PDS-Lab1](https://github.com/UnMecaNiko/PDS-Lab1) y
  [SpeedCheese-FLFR](https://github.com/UnMecaNiko/SpeedCheese-FLFR).

### Robótica móvil, control y simulación — intermedio académico

- Implementó control de trayectoria para robot diferencial usando Lyapunov,
  odometría, ROS, Gazebo y MATLAB/Simulink.
- Probó el controlador en simulación y hardware.
- La evidencia principal es de 2023 y no demuestra aún operación de flotas,
  navegación autónoma moderna o despliegues industriales sostenidos.
- **ROS 2 en aprendizaje activo** (confirmado por Nicolas el 2026-08-14). El
  ROS con el que ya trabajó es ROS 1, en el proyecto de TurtleBot. Decir
  "aprendiendo ROS 2" es honesto; decir "experiencia en ROS 2" todavía no.
- **Evidencia:** [control de TurtleBot](../../projects/control-turtlebot/index.md)
  y [repositorio](https://github.com/UnMecaNiko/turtleBot3-RoboticaRos).

> ⏳ PENDIENTE: al terminar el aprendizaje de ROS 2, registrar aquí qué se cubrió
> (nodos, launch, TF2, Nav2…) y con qué artefacto público se demuestra. Mientras
> no haya artefacto, en hojas de vida se declara como aprendizaje en curso.

### Liderazgo operativo y emprendimiento — intermedio

- Cofundó y operó Lápiz Labs: contratación, formación, programación de clases,
  seguimiento y calidad.
- Trabaja con su padre en el desarrollo y operación de CNC Magia Roja.
- Ha liderado arquitectura y entregables técnicos en proyectos de equipos
  multidisciplinarios.

### Inglés profesional — avanzado declarado

- LinkedIn declara inglés con competencia bilingüe y el perfil público registra
  una certificación EF avanzada.
- **Cautela:** [LinkedIn](https://www.linkedin.com/in/unmecaniko/) muestra “EF
  Level 13 — CEFR C1”, mientras
  [about-unmecaniko.md](../../context/about-unmecaniko.md) afirma “EF SET C2”.
  Hasta revisar el diploma, el nivel verificable debe expresarse como **C1
  avanzado**.

## Ajuste con roles de robótica + IA

### Ajuste alto hoy

- Robotics Solutions Engineer.
- Technical Solutions Engineer para plataformas de Physical AI.
- Robotics Deployment / Integration Engineer orientado a clientes.
- Systems Engineer para infraestructura, telemetría y datos robóticos.
- Sales Engineer o Field Applications Engineer en automatización industrial.

### Ajuste posible después de cerrar brechas

- Robotics Software Engineer.
- Autonomy Engineer.
- Perception / Computer Vision Engineer.
- Deep Learning Engineer para robots.
- Reinforcement Learning / Sim-to-Real Engineer.

## Brechas prioritarias

1. **ROS 2 actual:** nodos, lifecycle, launch, rosbag, TF2, Nav2, MoveIt 2,
   RViz, pruebas y diagnóstico. **En aprendizaje activo desde 2026-08**; la
   brecha sigue abierta hasta que exista un artefacto público que lo demuestre.
2. **C++ moderno:** C++17/20, CMake, concurrencia, memoria, pruebas y calidad de
   software. Los repositorios actuales prueban fundamentos, no cuatro años de
   experiencia profesional.
3. **Linux y operación de robots:** logs, redes, dispositivos, calibración,
   monitoreo y soporte de campo.
4. **Percepción:** OpenCV, cámaras de profundidad, detección, tracking, SLAM y
   evaluación de modelos.
5. **Physical AI:** PyTorch, Isaac Sim/Isaac Lab, aprendizaje por imitación,
   refuerzo y *sim-to-real*. Hay una señal de interés —el fork de
   [IsaacLab](https://github.com/UnMecaNiko/IsaacLab) de mayo de 2025, sin
   commits propios— pero interés no es evidencia: la brecha sigue abierta.
6. **Seguridad industrial:** análisis de riesgo y fundamentos de ISO 10218,
   ISO/TS 15066 e ISO 13849.
7. **Evidencia de producción:** un proyecto reciente que conecte robot, IA,
   nube, observabilidad y una historia de despliegue reproducible.

## Proyecto demostrador recomendado

Construir una evolución pública del proyecto TurtleBot:

- ROS 2 + Nav2 o MoveIt 2.
- Percepción con cámara y un modelo ligero.
- Telemetría y observabilidad en nube.
- Panel de salud, reproducción de incidentes y documentación de despliegue.
- Demo de descubrimiento de cliente, arquitectura, criterios de éxito y ROI.

Ese proyecto uniría la experiencia real en soluciones y nube con la evidencia
técnica de robótica que hoy falta en el perfil.
