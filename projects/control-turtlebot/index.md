---
title: "Trajectory Control for Differential Robots with Gazebo Simulation and Lyapunov Control"
version: "1.0.0"
last_updated: "2025-09-12"
audience: ["humans","agents"]
description: "A trajectory control system for differential robots implementing Lyapunov control theory with ROS and Gazebo simulation."

slug: "control-turtlebot"
categories: ["Robotics", "Programming"]
status: "archived"
role: ["Lead Developer"]
team: ["Nicolas Velasquez Lopez"]

date_start: "2023-05-16"
date_end: "2023-05-26"

tech: ["ROS", "Matlab", "Simulink", "Gazebo", "Python"]
tags: ["control-systems", "robot-navigation", "simulation", "differential-drive", "lyapunov-control", "real-time-control"]

cover: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/control-turtlebot/image1.jpg"
gallery:
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/control-turtlebot/image1.jpg"
    caption: "Robot trajectory control visualization"
  - url: "https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/control-turtlebot/image2.jpg"
    caption: "Gazebo simulation environment"
videos:
  - url: "https://www.youtube.com/watch?v=xh2NJ1tb8vQ"
    caption: "Differential robot trajectory control demonstration"

links:
  repo: "https://github.com/UnMecaNiko/turtleBot3-RoboticaRos.git"

impact:
  highlights:
    - "Successfully implemented real-time trajectory control for differential robots"
    - "Integrated with physical robot hardware"
    - "Developed simulation environment for testing and validation"
  metrics:
    - name: "Development time"
      value: 10
      unit: "days"

seo_title: "Trajectory Control for Differential Robots with ROS and Lyapunov Control"
seo_description: "Implementation of a trajectory control system for differential robots using Lyapunov control theory, ROS, and Gazebo simulation."

license: "MIT"
confidentiality: "Public"
---

# Trajectory Control for Differential Robots with Gazebo Simulation and Lyapunov Control

## Overview 🚀
I developed a complete trajectory control system for differential mobile robots that enables precise control over position and orientation. This system opens up numerous possibilities, from automated configurations to practical applications in robotized distribution warehouses and advanced logistics systems.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/control-turtlebot/image1.jpg"
       alt="Robot trajectory control visualization"
       title="Robot trajectory control visualization"
       width="50%">
</p>

La comunicación con el robot se realiza a través de ROS, utilizando Simulink para implementar el controlador y conectarse con el simulador Gazebo alojado en una máquina virtual. Este entorno permite realizar pruebas en simulación que replican fielmente el comportamiento en condiciones reales, validando así la robustez del sistema para su aplicación directa en robots físicos.

<p align="center">
  <img src="https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/control-turtlebot/image2.jpg"
       alt="Gazebo simulation environment"
       title="Gazebo simulation environment"
       width="50%">
</p>

## Technical Details 💡

### Controller Design
The project implements a trajectory generator capable of guiding a differential robot in real-time towards a desired position and orientation. The system:
- Takes robot odometry values as input
- Performs internal calculations using Lyapunov control theory
- Generates linear and angular velocity signals to control robot movement
- Ensures stability even with system perturbations and uncertainties

### Implementation Stack
- **ROS**: Main communication framework for robot interaction
- **Simulink**: Implementation of the controller logic
- **Gazebo**: 3D simulation environment hosted in a virtual machine
- **Python**: Supporting scripts and ROS node implementations

### Control Approach
The Lyapunov-based control approach was chosen for its:
- Solid mathematical framework
- Flexibility for different robot types
- Guaranteed trajectory stability
- Robustness against disturbances

## Key Features ⚡

- **Real-time Control**: Dynamic adjustment of robot position and course correction
- **Complex Maneuvers**: Handles reverse turns and angular movements
- **Dead Zone Management**: Defines tolerance zones to avoid unnecessary movements near target points
- **Simulation Environment**: Faithful replication of real-world conditions for testing
- **Physical Robot Integration**: Successfully tested and implemented on real hardware

## Technical Challenges 🔧

The project presented two main technical challenges:

1. **Real Robot Integration**: 
   - Establishing reliable communication between the control system and physical robot
   - Ensuring real-time performance with minimal latency
   - Calibrating control parameters for real-world conditions

2. **Matlab-ROS Communication**: 
   - Setting up robust communication between Matlab/Simulink and ROS
   - Managing data synchronization between different systems
   - Optimizing control loop timing

## Results and Impact 🎯

The implemented system successfully demonstrates:
- Precise trajectory following capabilities
- Robust performance in both simulated and real environments
- Practical applicability for industrial and service robotics
- Flexible architecture that can be adapted to different robot configurations

## Demonstration

Check out the project in action in this [video demonstration](https://www.youtube.com/watch?v=xh2NJ1tb8vQ) showing the robot following various trajectories and responding to control inputs.

## Future Improvements 🔄

Potential enhancements for the system include:
- Implementation of obstacle avoidance capabilities
- Integration with path planning algorithms
- Extension to other robot kinematics models
- Development of a more user-friendly interface for trajectory definition

## Resources 📚

- [Project Repository](https://github.com/UnMecaNiko/turtleBot3-RoboticaRos.git)
- [ROS Documentation](http://wiki.ros.org/)
- [TurtleBot3 Documentation](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/)
