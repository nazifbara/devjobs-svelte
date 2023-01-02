import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { getItem } from '$lib/firebase';

export const load = (async ({ params: { id } }) => {
	const job = (await getItem('jobs', id)).data();

	if (!job) {
		throw error(404, {
			message: 'Job not found'
		});
	}

	return {
		job
	};
}) satisfies PageServerLoad;
