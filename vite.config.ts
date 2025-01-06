import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';


export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [sveltekit(), svelteTesting()],
		server: { port: 3003 },
		envPrefix: 'APP_',
		define: {
			API_BASE_URL: JSON.stringify(env.APP_API_BASE_URL)
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
			globals: true,
			environment: 'jsdom',
			resolve: {
				conditions: mode === 'test' ? ['browser'] : []
			},
			setupFiles: ['./vitest-setup.ts']
		}
	};
});
