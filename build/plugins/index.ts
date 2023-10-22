import type { PluginOption } from 'vite';
import unocss from '@unocss/vite';
import progress from 'vite-plugin-progress';
import VueDevtools from 'vite-plugin-vue-devtools';
import vue from './vue';
import html from './html';
import unplugin from './unplugin';
import mock from './mock';
import visualizer from './visualizer';
import compress from './compress';

/**
 *	vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins = [...vue, progress(), VueDevtools(), html(viteEnv), ...unplugin, unocss(), mock];

	if (viteEnv.VITE_VISUALIZER === 'true') {
		plugins.push(visualizer);
	}

	if (viteEnv.VITE_COMPRESS === 'true') {
		plugins.push(compress(viteEnv));
	}

	return plugins;
}
