import type { ReactNode } from "react";

type IconName =
	| "brain"
	| "calendar"
	| "check"
	| "code"
	| "database"
	| "document"
	| "git"
	| "lock"
	| "message"
	| "network"
	| "pulse"
	| "spark"
	| "ticket"
	| "user";

const navigation = [
	["Arquitectura", "#arquitectura"],
	["Procesos", "#procesos"],
	["Skills", "#skills"],
	["Integraciones", "#integraciones"],
	["Gobernanza", "#gobernanza"],
	["Impacto", "#impacto"],
];

const knowledgeLayers = [
	{
		number: "01",
		label: "Conocimiento declarativo",
		title: "Qué sabemos",
		description:
			"Procesos internos, fichas de producto, conceptos, variables, criterios de éxito y documentación técnica profunda.",
		items: ["Guías de proceso", "Fichas ejecutivas", "Referencias técnicas"],
		icon: "document" as IconName,
	},
	{
		number: "02",
		label: "Conocimiento operativo",
		title: "Cómo actuamos",
		description:
			"Skills que convierten procedimientos recurrentes en instrucciones ejecutables, con pasos, herramientas y verificaciones.",
		items: ["Workflows", "Scripts y API", "Diagnósticos y recetas"],
		icon: "code" as IconName,
	},
	{
		number: "03",
		label: "Contexto vivo",
		title: "Qué está pasando",
		description:
			"Estado, alcance, decisiones, reuniones, pendientes y resultados de cada proceso, versionados en el tiempo.",
		items: ["Estado actual", "Pendientes", "Historial y evidencias"],
		icon: "pulse" as IconName,
	},
];

const presalesSteps = [
	{
		step: "01",
		title: "Solicitud estructurada",
		text: "El agente interpreta el requerimiento comercial, separa hechos de supuestos y detecta información faltante.",
	},
	{
		step: "02",
		title: "Triage y verificación",
		text: "Valida que exista un caso de uso, un producto y una necesidad técnica real. Busca duplicados antes de crear.",
	},
	{
		step: "03",
		title: "Borrador para aprobación",
		text: "Propone tipo de proceso, pipeline, descripción, responsables y campos; una persona confirma antes de escribir.",
	},
	{
		step: "04",
		title: "CRM + repositorio",
		text: "Crea el ticket y, en el mismo flujo, abre o actualiza el contexto versionado con una estructura uniforme.",
	},
	{
		step: "05",
		title: "Sesión y propagación",
		text: "Transforma la reunión en nota, estado, pendientes y avance de CRM sin duplicar la captura manual.",
	},
	{
		step: "06",
		title: "Seguimiento hasta cierre",
		text: "Consulta pendientes y etapas, asigna ownership correcto y mantiene trazabilidad de decisiones y resultados.",
	},
];

const skillGroups = [
	{
		title: "Skills de proceso",
		icon: "ticket" as IconName,
		color: "violet",
		description: "Orquestan trabajo entre personas, sistemas y repositorio.",
		skills: [
			"Solicitud → ticket",
			"Reunión → actualización",
			"Agenda → plan diario",
			"Alcance → propuesta",
		],
	},
	{
		title: "Skills de producto",
		icon: "code" as IconName,
		color: "cyan",
		description:
			"Convierten documentación técnica en operaciones seguras vía API.",
		skills: [
			"Configurar y diagnosticar",
			"Crear flujos e integraciones",
			"Ejecutar validaciones",
			"Mensajería y firma",
		],
	},
	{
		title: "Skills de infraestructura",
		icon: "network" as IconName,
		color: "amber",
		description:
			"Preparan cambios técnicos con revisión y despliegue controlado.",
		skills: [
			"Configuración de dominios",
			"Cambios versionados",
			"Pull requests",
			"Checklist de despliegue",
		],
	},
];

const integrationCards = [
	{
		icon: "ticket" as IconName,
		title: "CRM",
		text: "Tickets, pipelines, notas, responsables, búsqueda de duplicados y seguimiento.",
		mode: "MCP · lectura y escritura controlada",
	},
	{
		icon: "calendar" as IconName,
		title: "Calendario",
		text: "Descubrimiento de reuniones, asistentes, aceptación y contexto temporal.",
		mode: "MCP · consulta estructurada",
	},
	{
		icon: "message" as IconName,
		title: "Take-notes",
		text: "Resúmenes, transcripciones y acuerdos convertidos en contexto accionable.",
		mode: "MCP · recuperación de contenido",
	},
	{
		icon: "document" as IconName,
		title: "Documentación web",
		text: "Consulta bajo demanda de referencias oficiales y validación de comportamiento.",
		mode: "Web / API lab · investigación",
	},
	{
		icon: "code" as IconName,
		title: "APIs de producto",
		text: "Configuración, diagnóstico, pruebas y operaciones repetibles con scripts.",
		mode: "API directa · ejecución especializada",
	},
	{
		icon: "message" as IconName,
		title: "Mensajería de equipo",
		text: "Avances, alertas y preguntas sobre información faltante en el canal de trabajo.",
		mode: "Conector · comunicación proactiva",
	},
];

const guardrails = [
	{
		title: "Humano antes de escribir",
		text: "Tickets, notas externas, propuestas y cambios de alto impacto pasan por una vista previa y aprobación.",
		icon: "user" as IconName,
	},
	{
		title: "Secretos fuera del repositorio",
		text: "Tokens y credenciales viven en variables de entorno; nunca en documentos, conversaciones o commits.",
		icon: "lock" as IconName,
	},
	{
		title: "Hechos separados de inferencias",
		text: "El agente confirma alcance, valida fuentes y pregunta ante ambigüedad en vez de completar con suposiciones.",
		icon: "check" as IconName,
	},
	{
		title: "Datos mínimos y pertinentes",
		text: "Se conserva contexto comercial y técnico, no información sensible de personas finales ni evidencias privadas.",
		icon: "database" as IconName,
	},
	{
		title: "Toda acción deja rastro",
		text: "Los cambios quedan fechados, versionados y asociados a una fuente, una decisión o un responsable.",
		icon: "git" as IconName,
	},
	{
		title: "Blast radius acotado",
		text: "Cada skill declara qué herramientas puede usar y verifica el estado antes y después de una mutación.",
		icon: "network" as IconName,
	},
];

const impactAreas = [
	{
		title: "Menos búsqueda",
		text: "Estado, decisiones y documentación dejan de estar repartidos entre chats, notas y memoria individual.",
		tag: "Recuperación",
	},
	{
		title: "Menos doble digitación",
		text: "Una misma conversación alimenta el repositorio, el CRM y el canal de seguimiento.",
		tag: "Operación",
	},
	{
		title: "Menos reinvención",
		text: "Las skills reutilizan procedimientos API, diagnósticos y guardrails ya aprendidos.",
		tag: "Ejecución",
	},
	{
		title: "Menos procesos olvidados",
		text: "Toda información faltante se convierte en pendiente y cada ticket tiene contexto asociado.",
		tag: "Seguimiento",
	},
	{
		title: "Mejor onboarding",
		text: "Una persona o agente nuevo puede entender el proceso leyendo la misma fuente versionada.",
		tag: "Conocimiento",
	},
	{
		title: "Mejor control",
		text: "La automatización prepara y ejecuta; las decisiones sensibles conservan una puerta humana.",
		tag: "Gobernanza",
	},
];

const maturityStages = [
	{
		stage: "Nivel 1",
		title: "Memoria estructurada",
		text: "Reglas, procesos, plantillas y conocimiento viven en Git.",
		status: "Base",
	},
	{
		stage: "Nivel 2",
		title: "Asistencia repetible",
		text: "Skills guían tareas frecuentes y reducen variabilidad.",
		status: "En uso",
	},
	{
		stage: "Nivel 3",
		title: "Orquestación conectada",
		text: "MCP y APIs enlazan CRM, agenda, notas y producto.",
		status: "En evolución",
	},
	{
		stage: "Nivel 4",
		title: "Autonomía acotada",
		text: "Loops revisan pendientes, preguntan y reportan con guardrails.",
		status: "Objetivo",
	},
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
	const paths: Record<IconName, ReactNode> = {
		brain: (
			<>
				<path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.3A3.5 3.5 0 0 0 4.5 15a3.5 3.5 0 0 0 5 3.18V4.5Z" />
				<path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.3a3.5 3.5 0 0 1 1.5 6.7 3.5 3.5 0 0 1-5 3.18V4.5Z" />
				<path d="M6 8.3c.6-.2 1.3-.2 2 .1M18 8.3c-.6-.2-1.3-.2-2 .1M5.3 14.4c1-.4 2-.2 2.8.4M18.7 14.4c-1-.4-2-.2-2.8.4" />
			</>
		),
		calendar: (
			<>
				<rect x="3" y="5" width="18" height="16" rx="2" />
				<path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
			</>
		),
		check: (
			<>
				<circle cx="12" cy="12" r="9" />
				<path d="m8 12 2.5 2.5L16.5 9" />
			</>
		),
		code: (
			<>
				<path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M14 4l-4 16" />
			</>
		),
		database: (
			<>
				<ellipse cx="12" cy="5" rx="8" ry="3" />
				<path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
			</>
		),
		document: (
			<>
				<path d="M6 3h8l4 4v14H6z" />
				<path d="M14 3v5h5M9 13h6M9 17h6" />
			</>
		),
		git: (
			<>
				<circle cx="6" cy="5" r="2" />
				<circle cx="18" cy="7" r="2" />
				<circle cx="6" cy="19" r="2" />
				<path d="M6 7v10M8 9c2 0 3 .2 4 1.5S14 13 16 13h2V9" />
			</>
		),
		lock: (
			<>
				<rect x="4" y="10" width="16" height="11" rx="2" />
				<path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
			</>
		),
		message: (
			<>
				<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
				<path d="M8 9h8M8 13h5" />
			</>
		),
		network: (
			<>
				<rect x="9" y="3" width="6" height="5" rx="1" />
				<rect x="3" y="16" width="6" height="5" rx="1" />
				<rect x="15" y="16" width="6" height="5" rx="1" />
				<path d="M12 8v4M6 16v-4h12v4" />
			</>
		),
		pulse: (
			<>
				<path d="M3 12h4l2-7 4 14 2-7h6" />
			</>
		),
		spark: (
			<>
				<path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" />
				<path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
			</>
		),
		ticket: (
			<>
				<path d="M3 8a3 3 0 0 0 0 6v4h18v-4a3 3 0 0 0 0-6V4H3z" />
				<path d="M9 4v14M15 4v3M15 11v3M15 17v1" />
			</>
		),
		user: (
			<>
				<circle cx="12" cy="8" r="4" />
				<path d="M4 21a8 8 0 0 1 16 0" />
			</>
		),
	};

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{paths[name]}
		</svg>
	);
}

function SectionIntro({
	eyebrow,
	title,
	description,
	align = "left",
}: {
	eyebrow: string;
	title: string;
	description: string;
	align?: "left" | "center";
}) {
	return (
		<div className={`section-intro ${align === "center" ? "is-centered" : ""}`}>
			<span className="eyebrow">{eyebrow}</span>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

function Arrow() {
	return (
		<svg
			width="17"
			height="17"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
	);
}

export default function Home() {
	return (
		<main>
			<header className="site-header">
				<a className="brand" href="#inicio" aria-label="Ir al inicio">
					<span className="brand-mark">
						<span />
						<span />
						<span />
					</span>
					<span>
						Sistema operativo <b>IA</b>
					</span>
				</a>
				<nav aria-label="Navegación principal">
					{navigation.map(([label, href]) => (
						<a href={href} key={href}>
							{label}
						</a>
					))}
				</nav>
				<a className="header-cta" href="#blueprint">
					Ver blueprint
					<Arrow />
				</a>
			</header>

			<section className="hero" id="inicio">
				<div className="hero-grid" aria-hidden="true" />
				<div className="hero-glow hero-glow-one" aria-hidden="true" />
				<div className="hero-glow hero-glow-two" aria-hidden="true" />

				<div className="hero-copy">
					<div className="hero-kicker">
						<span className="live-dot" />
						Blueprint de operaciones asistidas por IA
					</div>
					<h1>
						Convertir contexto
						<br />
						en <span>acción.</span>
					</h1>
					<p>
						Una arquitectura para automatizar preventa y pilotos conectando
						conocimiento versionado, agentes especializados, skills ejecutables
						y sistemas de negocio.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#arquitectura">
							Explorar el sistema
							<Arrow />
						</a>
						<a className="button button-ghost" href="#procesos">
							Ver un proceso completo
						</a>
					</div>
					<div className="hero-proof">
						<span>
							<Icon name="git" size={17} /> Memoria versionada
						</span>
						<span>
							<Icon name="network" size={17} /> Sistemas conectados
						</span>
						<span>
							<Icon name="user" size={17} /> Control humano
						</span>
					</div>
				</div>

				<div
					className="hero-system"
					role="img"
					aria-label="Diagrama del sistema"
				>
					<div className="system-orbit orbit-one" />
					<div className="system-orbit orbit-two" />
					<div className="system-orbit orbit-three" />
					<div className="system-center">
						<div className="system-center-icon">
							<Icon name="brain" size={28} />
						</div>
						<span>Agente</span>
						<b>Context-aware</b>
					</div>
					<div className="system-node node-repo">
						<span className="node-icon violet">
							<Icon name="git" />
						</span>
						<span>Repositorio</span>
						<b>Memoria</b>
					</div>
					<div className="system-node node-crm">
						<span className="node-icon cyan">
							<Icon name="ticket" />
						</span>
						<span>CRM</span>
						<b>Operación</b>
					</div>
					<div className="system-node node-calendar">
						<span className="node-icon amber">
							<Icon name="calendar" />
						</span>
						<span>Agenda</span>
						<b>Señales</b>
					</div>
					<div className="system-node node-skills">
						<span className="node-icon green">
							<Icon name="code" />
						</span>
						<span>Skills</span>
						<b>Acciones</b>
					</div>
					<div className="system-status">
						<span />
						Contexto sincronizado
					</div>
				</div>
			</section>

			<div className="principles-bar">
				<span>Una fuente de verdad</span>
				<i />
				<span>Procesos ejecutables</span>
				<i />
				<span>Integración controlada</span>
				<i />
				<span>Aprendizaje acumulativo</span>
			</div>

			<section className="problem-section section">
				<div className="problem-copy">
					<span className="eyebrow">El punto de partida</span>
					<h2>
						El problema no es el modelo.
						<br />
						Es el <em>contexto.</em>
					</h2>
					<p>
						Un agente genérico puede redactar. Un agente con reglas, memoria,
						herramientas y procedimientos puede operar de forma consistente.
					</p>
				</div>
				<div className="transformation-card">
					<div className="transformation-side before">
						<span className="card-label">Antes</span>
						<ul>
							<li>Información dispersa</li>
							<li>Seguimiento por memoria</li>
							<li>Trabajo manual repetido</li>
							<li>Conocimiento individual</li>
						</ul>
					</div>
					<div className="transformation-arrow">
						<Arrow />
					</div>
					<div className="transformation-side after">
						<span className="card-label">Con el sistema</span>
						<ul>
							<li>Contexto estructurado</li>
							<li>Pendientes visibles</li>
							<li>Flujos automatizables</li>
							<li>Aprendizaje compartido</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="architecture-section section" id="arquitectura">
				<SectionIntro
					eyebrow="Arquitectura"
					title="Un arnés que le dice al agente qué saber, qué hacer y hasta dónde llegar."
					description="El sistema combina una base de conocimiento estructurada con procedimientos ejecutables y conexiones seguras a las herramientas donde ocurre el trabajo."
					align="center"
				/>

				<div className="architecture-stack">
					<div className="stack-row stack-sources">
						<span className="stack-title">Fuentes</span>
						<div className="stack-items">
							<span>
								<Icon name="ticket" /> CRM
							</span>
							<span>
								<Icon name="calendar" /> Calendario
							</span>
							<span>
								<Icon name="message" /> Take-notes
							</span>
							<span>
								<Icon name="document" /> Documentación web
							</span>
							<span>
								<Icon name="code" /> APIs
							</span>
						</div>
					</div>
					<div className="stack-connector">
						<span>MCP</span>
						<i />
						<span>API</span>
					</div>
					<div className="stack-row stack-agent">
						<span className="stack-title">Orquestación</span>
						<div className="agent-core">
							<span className="agent-core-icon">
								<Icon name="brain" size={25} />
							</span>
							<div>
								<b>Agente con contexto</b>
								<span>razona · propone · ejecuta · verifica</span>
							</div>
						</div>
						<div className="agent-modules">
							<span>Reglas</span>
							<span>Skills</span>
							<span>Guardrails</span>
							<span>Herramientas</span>
						</div>
					</div>
					<div className="stack-connector">
						<span>Leer</span>
						<i />
						<span>Escribir</span>
					</div>
					<div className="stack-row stack-memory">
						<span className="stack-title">Memoria persistente</span>
						<div className="repository-visual">
							<div className="repo-top">
								<span>
									<Icon name="git" /> repositorio-contexto/
								</span>
								<b>main</b>
							</div>
							<div className="repo-tree">
								<span>├── reglas-operativas.md</span>
								<span>├── procesos/</span>
								<span>├── productos/</span>
								<span>├── skills/</span>
								<span>└── cuentas/&lt;organización&gt;/</span>
							</div>
						</div>
						<div className="memory-benefits">
							<span>
								<b>Versionable</b>
								cada cambio tiene historia
							</span>
							<span>
								<b>Portable</b>
								no depende de una sesión
							</span>
							<span>
								<b>Auditable</b>
								decisiones con evidencia
							</span>
						</div>
					</div>
				</div>

				<div className="knowledge-grid">
					{knowledgeLayers.map((layer) => (
						<article className="knowledge-card" key={layer.number}>
							<div className="knowledge-top">
								<span className="knowledge-number">{layer.number}</span>
								<span className="knowledge-icon">
									<Icon name={layer.icon} />
								</span>
							</div>
							<small>{layer.label}</small>
							<h3>{layer.title}</h3>
							<p>{layer.description}</p>
							<div className="tag-list">
								{layer.items.map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="process-section section" id="procesos">
				<SectionIntro
					eyebrow="Procesos end-to-end"
					title="De una solicitud comercial a un proceso trazable."
					description="La automatización no es una acción aislada: es una cadena que interpreta, verifica, pide aprobación, escribe en los sistemas correctos y conserva contexto."
				/>

				<div className="process-timeline">
					{presalesSteps.map((item, index) => (
						<article className="process-step" key={item.step}>
							<div className="step-marker">
								<span>{item.step}</span>
								{index < presalesSteps.length - 1 && <i />}
							</div>
							<div className="step-content">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</article>
					))}
				</div>

				<div className="ownership-grid">
					<article className="ownership-card">
						<div className="ownership-heading">
							<span className="icon-chip violet">
								<Icon name="message" />
							</span>
							<div>
								<small>Sesión técnica</small>
								<h3>Preventa</h3>
							</div>
						</div>
						<p>
							El rol comercial mantiene el avance global. El rol técnico
							responde por acuerdos, respuestas y tareas de ingeniería.
						</p>
						<div className="ownership-flow">
							<span>Solicitud</span>
							<i />
							<span>Triage</span>
							<i />
							<span>Sesión</span>
							<i />
							<span>Cierre</span>
						</div>
					</article>

					<article className="ownership-card featured">
						<div className="ownership-heading">
							<span className="icon-chip cyan">
								<Icon name="pulse" />
							</span>
							<div>
								<small>Prueba controlada</small>
								<h3>Piloto / POC</h3>
							</div>
						</div>
						<p>
							El rol técnico asume organización y seguimiento: alcance real,
							criterios de éxito, checklist, fechas, riesgos y resultados.
						</p>
						<div className="ownership-flow">
							<span>Discovery</span>
							<i />
							<span>Prekickoff</span>
							<i />
							<span>Activo</span>
							<i />
							<span>Resultados</span>
						</div>
					</article>
				</div>

				<div className="meeting-system">
					<div className="meeting-heading">
						<span className="eyebrow">Calendario + take-notes</span>
						<h3>La reunión deja de ser un evento. Se convierte en estado.</h3>
						<p>
							El agente cruza agenda, asistentes y fuentes de notas; valida que
							exista contenido real y propaga los acuerdos una sola vez.
						</p>
					</div>
					<div className="meeting-flow">
						<div className="meeting-source">
							<span className="source-icon amber">
								<Icon name="calendar" />
							</span>
							<b>Calendario</b>
							<small>evento · asistentes · fecha</small>
						</div>
						<div className="flow-arrow">
							<Arrow />
						</div>
						<div className="meeting-source">
							<span className="source-icon cyan">
								<Icon name="message" />
							</span>
							<b>Notas</b>
							<small>resumen · transcripción · acuerdos</small>
						</div>
						<div className="flow-arrow">
							<Arrow />
						</div>
						<div className="meeting-agent">
							<span>
								<Icon name="spark" />
							</span>
							<b>Agente</b>
							<small>clasifica · deduplica · propone</small>
						</div>
						<div className="flow-arrow">
							<Arrow />
						</div>
						<div className="meeting-outputs">
							<span>
								<Icon name="git" /> Repositorio
							</span>
							<span>
								<Icon name="ticket" /> Nota CRM
							</span>
							<span>
								<Icon name="message" /> Mensaje
							</span>
						</div>
					</div>
					<div className="meeting-gate">
						<Icon name="user" />
						<span>
							<b>Un solo bloque de revisión.</b> Cero escrituras antes de la
							aprobación.
						</span>
					</div>
				</div>
			</section>

			<section className="skills-section section" id="skills">
				<SectionIntro
					eyebrow="Skills especializadas"
					title="Del conocimiento escrito al conocimiento ejecutable."
					description="Una skill empaqueta el cuándo, el cómo, las herramientas permitidas, los errores conocidos y la forma de verificar el resultado."
					align="center"
				/>

				<div className="skill-anatomy">
					<div className="skill-file">
						<div className="file-titlebar">
							<span>
								<i className="dot red" />
								<i className="dot yellow" />
								<i className="dot green" />
							</span>
							<b>SKILL.md</b>
							<span>operativa</span>
						</div>
						<div className="file-lines">
							<span>
								<i>trigger:</i> solicitud de piloto
							</span>
							<span>
								<i>inputs:</i> contexto, alcance, fecha
							</span>
							<span>
								<i>tools:</i> CRM, agenda, repositorio
							</span>
							<span>
								<i>workflow:</i> validar → proponer → aprobar
							</span>
							<span>
								<i>verify:</i> ticket + carpeta + enlace
							</span>
							<span>
								<i>guardrail:</i> no escribir sin confirmación
							</span>
						</div>
					</div>
					<div className="skill-anatomy-copy">
						<div>
							<span>01</span>
							<p>
								<b>Se activa por intención</b>
								El agente reconoce cuándo aplicar el procedimiento.
							</p>
						</div>
						<div>
							<span>02</span>
							<p>
								<b>Reduce el espacio de decisión</b>
								Ordena pasos, fuentes y excepciones antes de actuar.
							</p>
						</div>
						<div>
							<span>03</span>
							<p>
								<b>Limita las herramientas</b>
								Declara acceso mínimo y puertas de aprobación.
							</p>
						</div>
						<div>
							<span>04</span>
							<p>
								<b>Acumula experiencia</b>
								Errores reales se convierten en gotchas y recetas.
							</p>
						</div>
					</div>
				</div>

				<div className="skill-groups">
					{skillGroups.map((group) => (
						<article className={`skill-group ${group.color}`} key={group.title}>
							<span className="skill-group-icon">
								<Icon name={group.icon} />
							</span>
							<h3>{group.title}</h3>
							<p>{group.description}</p>
							<ul>
								{group.skills.map((skill) => (
									<li key={skill}>
										<Icon name="check" size={16} />
										{skill}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div className="api-pattern">
					<div className="api-copy">
						<span className="eyebrow">Patrón de operación API</span>
						<h3>Descubrir. Probar. Conectar. Verificar.</h3>
						<p>
							Las skills de producto combinan documentación, scripts y
							diagnóstico para convertir una API compleja en una secuencia
							repetible y segura.
						</p>
					</div>
					<div className="api-steps">
						{[
							["1", "Leer estado fresco", "GET"],
							["2", "Probar la acción", "TEST"],
							["3", "Aplicar documento completo", "POST"],
							["4", "Verificar resultado", "GET"],
							["5", "Registrar aprendizaje", "GIT"],
						].map(([number, title, command], index) => (
							<div className="api-step" key={number}>
								<span className="api-number">{number}</span>
								<b>{title}</b>
								<code>{command}</code>
								{index < 4 && <i />}
							</div>
						))}
					</div>
					<div className="api-principles">
						<span>Webhook sobre polling</span>
						<span>Prueba antes de integrar</span>
						<span>Token solo en entorno</span>
						<span>Verificación post-escritura</span>
					</div>
				</div>
			</section>

			<section className="integrations-section section" id="integraciones">
				<SectionIntro
					eyebrow="MCP + APIs"
					title="El agente no reemplaza las herramientas. Las orquesta."
					description="Los conectores estandarizan el acceso a sistemas de negocio. Las APIs directas cubren operaciones profundas de producto. El repositorio conserva el contexto que une ambos mundos."
				/>

				<div className="integrations-grid">
					{integrationCards.map((item) => (
						<article className="integration-card" key={item.title}>
							<div className="integration-icon">
								<Icon name={item.icon} />
							</div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<span className="integration-mode">{item.mode}</span>
						</article>
					))}
				</div>

				<div className="connector-comparison">
					<div className="connector-col">
						<div className="connector-label">
							<span className="connector-symbol">M</span>
							<div>
								<small>Conectores MCP</small>
								<h3>Herramientas de negocio</h3>
							</div>
						</div>
						<ul>
							<li>Autenticación administrada</li>
							<li>Operaciones con esquema conocido</li>
							<li>Lectura y escritura contextual</li>
							<li>Permisos acotados por skill</li>
						</ul>
					</div>
					<div className="connector-divider">
						<span>+</span>
					</div>
					<div className="connector-col">
						<div className="connector-label">
							<span className="connector-symbol api">/</span>
							<div>
								<small>API directa</small>
								<h3>Operaciones de producto</h3>
							</div>
						</div>
						<ul>
							<li>Scripts reproducibles</li>
							<li>Diagnóstico técnico profundo</li>
							<li>Pruebas y transformaciones</li>
							<li>Credenciales efímeras</li>
						</ul>
					</div>
					<div className="connector-result">
						<span className="connector-symbol result">
							<Icon name="spark" />
						</span>
						<div>
							<small>Resultado</small>
							<h3>Un flujo continuo</h3>
							<p>Contexto → decisión → acción → evidencia</p>
						</div>
					</div>
				</div>
			</section>

			<section className="governance-section section" id="gobernanza">
				<SectionIntro
					eyebrow="Gobernanza"
					title="Automatizar sin perder el control."
					description="La autonomía útil no significa acceso ilimitado. El sistema define qué puede leer, qué puede preparar y qué necesita confirmación humana."
					align="center"
				/>

				<div className="approval-flow">
					<div className="approval-step">
						<span>
							<Icon name="brain" />
						</span>
						<b>Agente analiza</b>
						<small>fuentes + reglas + contexto</small>
					</div>
					<div className="approval-line" />
					<div className="approval-step">
						<span>
							<Icon name="document" />
						</span>
						<b>Genera borrador</b>
						<small>cambios y efectos visibles</small>
					</div>
					<div className="approval-line gated">
						<i>
							<Icon name="lock" size={14} />
						</i>
					</div>
					<div className="approval-step human">
						<span>
							<Icon name="user" />
						</span>
						<b>Humano aprueba</b>
						<small>corrige o autoriza</small>
					</div>
					<div className="approval-line" />
					<div className="approval-step">
						<span>
							<Icon name="check" />
						</span>
						<b>Agente ejecuta</b>
						<small>escribe + verifica + registra</small>
					</div>
				</div>

				<div className="guardrails-grid">
					{guardrails.map((item) => (
						<article className="guardrail-card" key={item.title}>
							<span>
								<Icon name={item.icon} />
							</span>
							<div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="impact-section section" id="impact">
				<SectionIntro
					eyebrow="Impacto operativo"
					title="El ahorro aparece donde antes había fricción."
					description="No se trata solo de generar texto más rápido. Se reduce búsqueda, cambio de contexto, digitación repetida, pérdida de acuerdos y dependencia del conocimiento individual."
				/>

				<div className="impact-grid">
					{impactAreas.map((item, index) => (
						<article className="impact-card" key={item.title}>
							<span className="impact-index">
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="impact-tag">{item.tag}</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>

				<div className="learning-loop">
					<div className="loop-visual">
						<div className="loop-ring ring-outer" />
						<div className="loop-ring ring-inner" />
						<div className="loop-center">
							<Icon name="spark" size={28} />
							<b>Aprendizaje</b>
						</div>
						<span className="loop-node node-one">Ejecutar</span>
						<span className="loop-node node-two">Verificar</span>
						<span className="loop-node node-three">Corregir</span>
						<span className="loop-node node-four">Versionar</span>
					</div>
					<div className="loop-copy">
						<span className="eyebrow">Memoria que mejora</span>
						<h3>Cada operación fortalece la siguiente.</h3>
						<p>
							Las correcciones no se pierden en una conversación. Se convierten
							en reglas, calibraciones, referencias, casos límite y nuevos pasos
							de verificación.
						</p>
						<ul>
							<li>
								<Icon name="check" size={17} />
								Historial de decisiones y cambios
							</li>
							<li>
								<Icon name="check" size={17} />
								Pendientes como preguntas futuras
							</li>
							<li>
								<Icon name="check" size={17} />
								Gotchas incorporados en skills
							</li>
							<li>
								<Icon name="check" size={17} />
								Calibración con resultados reales
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="blueprint-section section" id="blueprint">
				<SectionIntro
					eyebrow="Ruta de implementación"
					title="Una evolución por capas, no un salto de fe."
					description="La autonomía se construye cuando la memoria, los procedimientos y los permisos ya son confiables."
					align="center"
				/>

				<div className="maturity-roadmap">
					{maturityStages.map((item, index) => (
						<article className="maturity-stage" key={item.stage}>
							<div className="maturity-top">
								<span>{item.stage}</span>
								<i>{item.status}</i>
							</div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<div className="maturity-progress">
								{maturityStages.map((_, progressIndex) => (
									<span
										className={progressIndex <= index ? "active" : ""}
										key={progressIndex}
									/>
								))}
							</div>
						</article>
					))}
				</div>

				<div className="final-card">
					<div className="final-grid" aria-hidden="true" />
					<div className="final-copy">
						<span className="hero-kicker">
							<span className="live-dot" />
							Un patrón reutilizable
						</span>
						<h2>
							Conocimiento que no solo se consulta.
							<br />
							<span>Conocimiento que opera.</span>
						</h2>
						<p>
							Repositorio como memoria. Agentes como operadores. Skills como
							procedimientos. MCP y APIs como conexiones. Personas como
							responsables de las decisiones.
						</p>
					</div>
					<div className="final-formula">
						<span>
							<Icon name="git" /> Contexto
						</span>
						<b>+</b>
						<span>
							<Icon name="brain" /> Agentes
						</span>
						<b>+</b>
						<span>
							<Icon name="network" /> Conexiones
						</span>
						<b>=</b>
						<span className="formula-result">
							<Icon name="spark" /> Operación aumentada
						</span>
					</div>
				</div>
			</section>

			<footer>
				<a className="brand" href="#inicio">
					<span className="brand-mark">
						<span />
						<span />
						<span />
					</span>
					<span>
						Sistema operativo <b>IA</b>
					</span>
				</a>
				<p>
					Arquitectura general para operaciones comerciales y técnicas asistidas
					por inteligencia artificial.
				</p>
				<a href="#inicio">
					Volver arriba
					<span>↑</span>
				</a>
			</footer>
		</main>
	);
}
