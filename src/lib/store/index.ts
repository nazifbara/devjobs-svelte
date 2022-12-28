import type { Job } from '$lib/types';
import { writable } from 'svelte/store';

const createJobs = () => {
	const { subscribe, set } = writable<Job[]>([]);

	return {
		subscribe,
		set
	};
};

export const jobs = createJobs();

export const currentTheme = (() => {
	const { subscribe, update, set } = writable<'light' | 'dark'>('light');

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light')),
		set
	};
})();
