import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Sistema operativo de IA para preventa y pilotos",
	description:
		"Una arquitectura reutilizable para convertir procesos, conocimiento y herramientas en operaciones trazables asistidas por agentes de IA.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
