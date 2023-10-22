/// <reference types="vite/client" />

declare module 'mockjs';

declare module '*.vue' {
	import { DefineComponent } from 'vue';

	const component: DefineComponent<object, object, any>;
	export default component;
}

/**
 * Env环境类型
 * - dev: 开发环境
 * - test: 测试环境
 * - prod: 生产环境
 */
type EnvType = 'dev' | 'test' | 'prod';

/* 环境配置元数据，最终由Vite loadEnv函数进行加载与解析 */
interface ImportMetaEnv {
	/** 项目基本地址 */
	readonly VITE_BASE_URL: string;
	/** 项目名称 */
	readonly VITE_APP_NAME: string;
	/** 项目标题 */
	readonly VITE_APP_TITLE: string;
	/** 项目描述 */
	readonly VITE_APP_DESCRIPTION: string;

	/* 代理API URL */
	readonly VITE_APP_PROXY_ROOT: string;

	/* 业务服务根地址，该地址将会被当作代理前缀自动处理 */
	readonly VITE_APP_API_ROOT: string;

	/** 默认文件存储方式 */
	readonly VITE_APP_FILE_STORAGE: string;
	/** Vite环境类型 */
	readonly VITE_ENV_TYPE?: EnvType;
	/** 开启请求代理 */
	readonly VITE_HTTP_PROXY?: 'true' | 'false';
	/* 是否开启Mock */
	readonly VITE_MOCK?: 'true' | 'false';
	/** 是否开启打包文件大小结果分析 */
	readonly VITE_VISUALIZER?: 'true' | 'false';
	/* 是否开启压缩模式 */
	readonly VITE_COMPRESS?: 'true' | 'false';
	/** hash路由模式 */
	readonly VITE_HASH_ROUTE?: 'true' | 'false';
}

interface ImportMetaEnv {
	readonly env: ImportMetaEnv;
}
