# ROS 2 Jazzy — mapa de consulta

Índice de trabajo de los tutoriales oficiales. **No sustituye la documentación:**
cuando haga falta un procedimiento, se abre el enlace y se sigue allá.

- **Página canónica:** [Tutorials — ROS 2 Jazzy](https://docs.ros.org/en/jazzy/Tutorials.html)
- **Fuente del árbol:** [ros2/ros2_documentation](https://github.com/ros2/ros2_documentation/blob/jazzy/source/Tutorials.rst) (rama `jazzy`, consultada 2026-08-22)
- **Entorno de Nicolas:** ROS 2 Jazzy + Ubuntu 24.04 en WSL 2, metapaquete desktop.
- **Estado:** mapa de consulta. Ningún tutorial se marca como hecho hasta que
  Nicolas lo complete y quede evidencia.

Los tutoriales **se recorren en orden la primera vez**: cada uno asume el
anterior y no pretenden ser documentación completa. Para una pregunta puntual
(“¿cómo hago X?”) ir a [How-to Guides](https://docs.ros.org/en/jazzy/How-To-Guides.html).
Para el “qué es” sin pasos, [Concepts](https://docs.ros.org/en/jazzy/Concepts.html).

---

## Cómo usar este archivo

| Necesito… | Abrir |
|---|---|
| Aprender desde cero, en orden | [First Steps](https://docs.ros.org/en/jazzy/First-Steps.html) y luego Beginner CLI |
| Entender un concepto (nodo, topic, TF…) | [Concepts](https://docs.ros.org/en/jazzy/Concepts.html) y el tutorial CLI del mismo nombre |
| Hacer una tarea concreta ya sabiendo lo básico | [How-to Guides](https://docs.ros.org/en/jazzy/How-To-Guides.html) |
| Escribir código (pub/sub, srv, msg, params) | Beginner: Client libraries |
| Launch, TF2, URDF, tests, RViz | Intermediate |
| rosbag desde un nodo, DDS, Gazebo, security | Advanced |
| QoS, lifecycle, tiempo real | Demos |
| Pasar conocimiento de ROS 1 a ROS 2 | [Migrating from ROS 1](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html) |

Lo que **no está** en Tutorials.html: Nav2 y MoveIt 2 (salvo un enlace externo
de MoveIt y TurtleBot 3 en Demos). Esas stacks tienen docs propias; no buscarlas
aquí como si faltara una sección.

---

## Consulta por tema

Cuando en el chat o en el workspace haga falta “algo de ROS 2”, entrar por esta
tabla y abrir el enlace. No reescribir el tutorial en el repositorio.

| Tema | Dónde |
|---|---|
| Entorno, `source`, overlay | [Configuring the ROS 2 environment](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Configuring-ROS2-Environment.html) |
| turtlesim y rqt (el banco de pruebas) | [Using turtlesim, ros2, and rqt](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) |
| Nodos | [Understanding nodes](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html) |
| Topics | [Understanding topics](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Topics.html) |
| Services | [Understanding services](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html) |
| Parameters | [Understanding parameters](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Parameters/Understanding-ROS2-Parameters.html) · [Using ros2 param](https://docs.ros.org/en/jazzy/How-To-Guides/Using-ros2-param.html) |
| Actions | [Understanding actions](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Actions/Understanding-ROS2-Actions.html) · crear/escribir: Intermediate |
| Logs / `rqt_console` | [Using rqt_console](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Using-Rqt-Console/Using-Rqt-Console.html) |
| Launch (usar uno existente) | [Launching nodes](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Launching-Multiple-Nodes/Launching-Multiple-Nodes.html) |
| Launch (escribir y estructurar) | [Launch](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Launch-Main.html) |
| rosbag (CLI) | [Recording and playing back data](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html) |
| rosbag desde código | Advanced: [C++](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Recording-A-Bag-From-Your-Own-Node-CPP.html) / [Python](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Recording-A-Bag-From-Your-Own-Node-Py.html) |
| colcon | [Using colcon](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html) |
| Workspace | [Creating a workspace](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html) |
| Paquete | [Creating a package](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-Your-First-ROS2-Package.html) · [Developing a package](https://docs.ros.org/en/jazzy/How-To-Guides/Developing-a-ROS-2-Package.html) |
| Publisher / subscriber | [C++](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.html) · [Python](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html) |
| Service / client | [C++](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Service-And-Client.html) · [Python](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Service-And-Client.html) |
| Mensajes y servicios propios | [Custom ROS 2 interfaces](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Custom-ROS2-Interfaces.html) |
| `ros2 doctor` | [Getting started with ros2 doctor](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Getting-Started-With-Ros2doctor.html) |
| Dependencias (`rosdep`) | [Using rosdep](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Rosdep.html) |
| Nodos composables / lifecycle | [Writing a composable node](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Writing-a-Composable-Node.html) · [Composition](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Composition.html) · [Managed nodes](https://docs.ros.org/en/jazzy/Tutorials/Demos/Managed-Nodes.html) |
| TF2 | [tf2](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Tf2/Tf2-Main.html) |
| Tests | [Testing](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Testing/Testing-Main.html) |
| URDF / xacro | [URDF](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/URDF-Main.html) |
| RViz | [RViz](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/RViz/RViz-Main.html) |
| QoS | [Quality of Service](https://docs.ros.org/en/jazzy/Tutorials/Demos/Quality-of-Service.html) |
| DDS / descubrimiento | [Discovery Server](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Discovery-Server/Discovery-Server.html) · [Fast DDS](https://docs.ros.org/en/jazzy/Tutorials/Advanced/FastDDS-Configuration.html) · [DDS tuning](https://docs.ros.org/en/jazzy/How-To-Guides/DDS-tuning.html) |
| Gazebo / Webots | [Simulators](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Simulators/Simulation-Main.html) |
| Seguridad (SROS 2) | [Security](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Security/Security-Main.html) |
| Instalar / troubleshooting | [Installation](https://docs.ros.org/en/jazzy/Installation.html) · [Installation troubleshooting](https://docs.ros.org/en/jazzy/How-To-Guides/Installation-Troubleshooting.html) |

---

## Mapa de [Tutorials.html](https://docs.ros.org/en/jazzy/Tutorials.html)

Orden oficial. La primera pasada se hace de arriba hacia abajo.

### First Steps

Ruta de arranque: conceptos → instalar → turtlesim → nodos/topics/services/params/actions → logs → launch → rosbag.

- [First steps with ROS](https://docs.ros.org/en/jazzy/First-Steps.html)

### Beginner: CLI tools

Inteligencia de consola. No se escribe código de nodos todavía.

| # | Tutorial |
|---|---|
| 1 | [Configuring the ROS 2 environment](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Configuring-ROS2-Environment.html) |
| 2 | [Using turtlesim, ros2, and rqt](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) |
| 3 | [Understanding nodes](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html) |
| 4 | [Understanding topics](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Topics/Understanding-ROS2-Topics.html) |
| 5 | [Understanding services](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html) |
| 6 | [Understanding parameters](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Parameters/Understanding-ROS2-Parameters.html) |
| 7 | [Understanding actions](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Actions/Understanding-ROS2-Actions.html) |
| 8 | [Using rqt_console](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Using-Rqt-Console/Using-Rqt-Console.html) |
| 9 | [Launching nodes](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Launching-Multiple-Nodes/Launching-Multiple-Nodes.html) |
| 10 | [Recording and playing back data](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.html) |

### Beginner: Client libraries

Workspace, paquetes y los primeros nodos en C++ y Python.

| # | Tutorial |
|---|---|
| 1 | [Using colcon to build packages](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html) |
| 2 | [Creating a workspace](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html) |
| 3 | [Creating a package](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-Your-First-ROS2-Package.html) |
| 4 | [Writing a simple publisher and subscriber (C++)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.html) |
| 5 | [Writing a simple publisher and subscriber (Python)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html) |
| 6 | [Writing a simple service and client (C++)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Service-And-Client.html) |
| 7 | [Writing a simple service and client (Python)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Service-And-Client.html) |
| 8 | [Creating custom ROS 2 msg and srv files](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Custom-ROS2-Interfaces.html) |
| 9 | [Implementing custom interfaces](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Single-Package-Define-And-Use-Interface.html) |
| 10 | [Using parameters in a class (C++)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Using-Parameters-In-A-Class-CPP.html) |
| 11 | [Using parameters in a class (Python)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Using-Parameters-In-A-Class-Python.html) |
| 12 | [Getting started with ros2 doctor](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Getting-Started-With-Ros2doctor.html) |
| 13 | [Creating and using plugins (C++)](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Pluginlib.html) |

Ejemplos mínimos extra (no están en el toctree, los cita la portada):
[ros2/examples](https://github.com/ros2/examples).

### Intermediate

| Bloque | Contenido |
|---|---|
| [Using rosdep](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Rosdep.html) | Dependencias de sistema |
| [Creating an action](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Creating-an-Action.html) | Definir un action |
| Action server/client | [C++](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Writing-an-Action-Server-Client/Cpp.html) · [Python](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Writing-an-Action-Server-Client/Py.html) |
| Composición | [Composable node](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Writing-a-Composable-Node.html) · [Composition](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Composition.html) · [Node interfaces template](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Using-Node-Interfaces-Template-Class.html) |
| Params en runtime | [C++](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Monitoring-For-Parameter-Changes-CPP.html) · [Python](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Monitoring-For-Parameter-Changes-Python.html) |
| [Launch](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Launch-Main.html) | Crear launch, sistema, substitutions, event handlers, proyectos grandes |
| [tf2](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Tf2/Tf2-Main.html) | Intro, static/dynamic broadcaster, listener, frames, tiempo, debug, quaternions. Casi todo en C++ y Python |
| [Testing](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Testing/Testing-Main.html) | CLI, C++, Python, integración, buildfarm |
| [URDF](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/URDF-Main.html) | Modelo visual, móvil, colisión, xacro, robot_state_publisher, exportar |
| [RViz](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/RViz/RViz-Main.html) | Guía de usuario, markers, displays y paneles propios |

Launch, en orden interno:

1. [Creating a launch file](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Creating-Launch-Files.html)
2. [Launching and monitoring multiple nodes](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Launch-system.html)
3. [Using substitutions](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Using-Substitutions.html)
4. [Using event handlers](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Using-Event-Handlers.html)
5. [Managing large projects](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Launch/Using-ROS2-Launch-For-Large-Projects.html)

### Advanced

| Tutorial | Para qué |
|---|---|
| [Supplementing custom rosdep keys](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Supplementing-Custom-Rosdep-Keys.html) | Keys de rosdep que no están en rosdistro |
| [Topic statistics](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Topic-Statistics-Tutorial/Topic-Statistics-Tutorial.html) | Estadísticas de topics |
| [Discovery Server](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Discovery-Server/Discovery-Server.html) | Descubrimiento acotado (útil si DDS en WSL se pelea con la red) |
| [Allocator template](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Allocator-Template-Tutorial.html) | Allocators |
| [Ament lint](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Ament-Lint-For-Clean-Code.html) | Linters |
| [Fast DDS configuration](https://docs.ros.org/en/jazzy/Tutorials/Advanced/FastDDS-Configuration.html) | XML / QoS de Fast DDS |
| [Improved dynamic discovery](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Improved-Dynamic-Discovery.html) | Discovery dinámico |
| rosbag desde un nodo | [C++](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Recording-A-Bag-From-Your-Own-Node-CPP.html) · [Python](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Recording-A-Bag-From-Your-Own-Node-Py.html) · [leer bag C++](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Reading-From-A-Bag-File-CPP.html) |
| [rqt_bag plugin](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Create-An-Rqtbag-Plugin.html) | Plugin de rqt para bags |
| [ROS 2 tracing](https://docs.ros.org/en/jazzy/Tutorials/Advanced/ROS2-Tracing-Trace-and-Analyze.html) | Trazas |
| [Creating an RMW implementation](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Creating-An-RMW-Implementation.html) | Middleware propio |
| [Simulators](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Simulators/Simulation-Main.html) | [Webots](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Simulators/Webots/Simulation-Webots.html), [Gazebo](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Simulators/Gazebo/Simulation-Gazebo.html), [MVSim](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Simulators/MVSim/Simulation-MVSim.html) |
| [Security](https://docs.ros.org/en/jazzy/Tutorials/Advanced/Security/Security-Main.html) | SROS 2 |

### Demos

No son el camino de aprendizaje: son piezas sueltas cuando ya se tiene el núcleo.

- [Quality of Service](https://docs.ros.org/en/jazzy/Tutorials/Demos/Quality-of-Service.html)
- [Managed nodes](https://docs.ros.org/en/jazzy/Tutorials/Demos/Managed-Nodes.html) (lifecycle)
- [Intra-process communication](https://docs.ros.org/en/jazzy/Tutorials/Demos/Intra-Process-Communication.html)
- [Rosbag with ROS 1 bridge](https://docs.ros.org/en/jazzy/Tutorials/Demos/Rosbag-with-ROS1-Bridge.html)
- [Real-time programming](https://docs.ros.org/en/jazzy/Tutorials/Demos/Real-Time-Programming.html)
- [Dummy robot](https://docs.ros.org/en/jazzy/Tutorials/Demos/dummy-robot-demo.html)
- [Logging](https://docs.ros.org/en/jazzy/Tutorials/Demos/Logging-and-logger-configuration.html)
- [Content filtering subscription](https://docs.ros.org/en/jazzy/Tutorials/Demos/Content-Filtering-Subscription.html)
- [Service introspection](https://docs.ros.org/en/jazzy/Tutorials/Demos/Service-Introspection.html)
- [Wait for acknowledgment](https://docs.ros.org/en/jazzy/Tutorials/Demos/Wait-for-Acknowledgment.html)

Enlaces externos que cita la misma página (no son docs.ros.org):

- [ROS 1 ↔ ROS 2 bridge](https://github.com/ros2/ros1_bridge)
- [MoveIt 2 — motion planning](https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html)
- TurtleBot 3 (comunidad): [getting started](https://emanual.robotis.com/docs/en/platform/turtlebot3/quick-start/), [simulación](https://emanual.robotis.com/docs/en/platform/turtlebot3/simulation/), [Nav2 en sim](https://emanual.robotis.com/docs/en/platform/turtlebot3/navigation2/), [SLAM en sim](https://emanual.robotis.com/docs/en/platform/turtlebot3/slam/)

### Miscellaneous

Poco útil para el setup actual (IBM Cloud, Eclipse 2017/2021, kernel `rt_preempt`).
No priorizar.

---

## Páginas hermanas (la portada las apunta)

| Página | Uso |
|---|---|
| [How-to Guides](https://docs.ros.org/en/jazzy/How-To-Guides.html) | Respuesta corta a “cómo hago X”. Asume que ya se recorrieron los tutoriales |
| [Concepts](https://docs.ros.org/en/jazzy/Concepts.html) | Fondo, sin receta |
| [Installation](https://docs.ros.org/en/jazzy/Installation.html) | Instalar. En WSL: [Ubuntu deb packages](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html) |
| [Migrating from ROS 1](https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html) | El puente desde el TurtleBot en ROS 1 |

How-to que más van a salir en este setup:

- [Installation troubleshooting](https://docs.ros.org/en/jazzy/How-To-Guides/Installation-Troubleshooting.html)
- [Developing a ROS 2 package](https://docs.ros.org/en/jazzy/How-To-Guides/Developing-a-ROS-2-Package.html)
- [Launch file different formats](https://docs.ros.org/en/jazzy/How-To-Guides/Launch-file-different-formats.html)
- [Launching composable nodes](https://docs.ros.org/en/jazzy/How-To-Guides/Launching-composable-nodes.html)
- [Sync vs async](https://docs.ros.org/en/jazzy/How-To-Guides/Sync-Vs-Async.html)
- [Working with multiple RMW implementations](https://docs.ros.org/en/jazzy/How-To-Guides/Working-with-multiple-RMW-implementations.html)
- [Using callback groups](https://docs.ros.org/en/jazzy/How-To-Guides/Using-callback-groups.html)
- [Getting backtraces](https://docs.ros.org/en/jazzy/How-To-Guides/Getting-Backtraces-in-ROS-2.html)
- [ROS 2 IDEs](https://docs.ros.org/en/jazzy/How-To-Guides/ROS-2-IDEs.html)

---

## Ruta para el demostrador (sin marcar progreso inventado)

Brecha #1 en [capacidades.md](../identity/capacidades.md): nodos, lifecycle,
launch, rosbag, TF2, Nav2, MoveIt 2, RViz, pruebas.

Cobertura **dentro** de esta página:

1. Beginner CLI completo (nodos → rosbag).
2. Client libraries: workspace, paquete, pub/sub y srv en Python; un pub/sub en C++.
3. Intermediate: Launch, TF2 (un track), Testing, URDF, RViz.
4. Demos: Managed nodes (lifecycle) y QoS.
5. Advanced: Gazebo cuando toque simulación 3D.

Fuera de esta página, después:

- Nav2 → docs de Navigation 2 (el e-manual de TurtleBot 3 solo es un atajo de comunidad).
- MoveIt 2 → el enlace de PickNik en Demos.
- Isaac Sim → no es parte de docs.ros.org.

> ⏳ PENDIENTE: cuando se complete un bloque, anotarlo aquí con fecha y enlace al
> artefacto (repo o nota). Hasta entonces, en CV sigue siendo aprendizaje en curso.
