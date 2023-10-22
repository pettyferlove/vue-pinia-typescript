import { createApp } from 'vue';
import { setupImportAssets } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './app.vue';

async function setupApp() {
	setupImportAssets();

	const app = createApp(App);

	setupStore(app);

	await setupRouter(app);

	app.mount('#app');
}

setupApp().then(() => {});
