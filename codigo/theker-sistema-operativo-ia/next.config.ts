import type { NextConfig } from "next";

// La presentación es totalmente estática: no hay componentes de cliente, ni
// datos en tiempo de ejecución, ni variables de entorno. Se exporta a HTML/CSS/JS
// para servirla con un servidor de archivos, sin proceso Node en producción.
const nextConfig: NextConfig = {
	output: "export",
};

export default nextConfig;
