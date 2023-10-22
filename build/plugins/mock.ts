import { viteMockServe } from 'vite-plugin-mock';

export default viteMockServe({
	mockPath: 'mock',
	// 控制打包时忽略构建
	injectCode: `
		import { setupMockServer } from '../mock';
		setupMockServer();
	`
});
