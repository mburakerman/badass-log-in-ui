import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name1: 'world'
	}
});

export default app;