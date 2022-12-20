import { writable } from 'svelte/store';

export const currentTheme = (() => {
	const { subscribe, update } = writable<'light' | 'dark'>('light');

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light'))
	};
})();
