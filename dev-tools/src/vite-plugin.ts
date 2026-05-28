import type { Plugin } from "vite";

export function devToolsPlugin(): Plugin {
	return {
		name: "dev-tools",
		apply: "serve",
		configResolved() {},
	};
}

export function errorInterceptorPlugin(): Plugin {
	return {
		name: "error-interceptor",
		apply: "serve",
		configureServer(server) {
			server.middlewares.use((_req, _res, next) => next());
		},
	};
}

export function mediaVersionsPlugin(): Plugin {
	return {
		name: "media-versions",
		apply: "serve",
		configResolved() {},
	};
}