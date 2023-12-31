import VueMacros from 'unplugin-vue-macros/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { getSrcPath } from '../utils';

const srcPath = getSrcPath();

const customIconPath = `${srcPath}/assets/svg`;

export default [
	VueMacros(),
	Icons({
		autoInstall: true,
		compiler: 'vue3',
		customCollections: {
			custom: FileSystemIconLoader(customIconPath)
		},
		scale: 1,
		defaultClass: 'inline-block'
	}),
	Components({
		dts: 'src/typings/components.d.ts',
		types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
		resolvers: [IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })]
	}),
	createSvgIconsPlugin({
		iconDirs: [customIconPath],
		symbolId: 'icon-custom-[dir]-[name]',
		inject: 'body-last',
		customDomId: '__CUSTOM_SVG_ICON__'
	})
];
