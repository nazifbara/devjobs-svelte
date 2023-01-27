import { writable } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

import type { Profile } from '$lib/types';

export const auth = (() => {
	const { subscribe, set } = writable<{ session: Session; profile: Profile } | null>(null);

	return {
		subscribe,
		login: (session: Session, profile: Profile) => set({ session, profile }),
		logout: () => set(null)
	};
})();

export const currentTheme = (() => {
	const { subscribe, update, set } = writable<'light' | 'dark'>('light');

	return {
		subscribe,
		toggle: () => update((theme) => (theme === 'light' ? 'dark' : 'light')),
		set
	};
})();
