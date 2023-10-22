import type { ProxyOptions } from 'vite';

/**
 * 设置网络代理
 * @param env - ENV环境配置
 */
export function createViteProxy(env: ImportMetaEnv) {
	const isOpenProxy = env.VITE_HTTP_PROXY === 'true';
	if (!isOpenProxy) return undefined;
	const { VITE_ENV_TYPE = 'dev' } = env;
	const proxy: Record<string, string | ProxyOptions> = {
		[`${VITE_ENV_TYPE}_proxy`]: {
			target: env.VITE_APP_PROXY_ROOT,
			changeOrigin: true,
			rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_API_ROOT}`), '')
		}
	};
	return proxy;
}
