import type { App } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const { VITE_HASH_ROUTE = 'false', VITE_BASE_URL } = import.meta.env;

export const router = createRouter({
	history: VITE_HASH_ROUTE === 'true' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
	routes: []
});

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
	app.use(router);
	await router.isReady();
}
