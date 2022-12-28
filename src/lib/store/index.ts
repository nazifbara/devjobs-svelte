import { writable } from 'svelte/store';
import data from '../data.json';

const createJobs = () => {
	const { subscribe } = writable(data);

	return {
		subscribe
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
