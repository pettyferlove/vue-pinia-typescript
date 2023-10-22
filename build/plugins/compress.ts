import ViteCompression from 'vite-plugin-compression';

/**
 * Compression 压缩插件设置
 * @param viteEnv
 */
export default (viteEnv: ImportMetaEnv) => {
	const { VITE_COMPRESS_TYPE = 'gzip' } = viteEnv;
	return ViteCompression({ algorithm: VITE_COMPRESS_TYPE });
};
