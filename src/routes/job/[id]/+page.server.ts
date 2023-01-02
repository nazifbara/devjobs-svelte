import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import type { Job } from '$lib/types';
import { getItem } from '$lib/firebase';
import { toObjectDocSnap } from '$lib/utils/helpers';

export const load = (async ({ params: { id } }) => {
	const job = toObjectDocSnap<Job>(await getItem('jobs', id));

	if (!job) {
		throw error(404, {
			message: 'Job not found'
		});
	}

	return {
		job
	};
}) satisfies PageServerLoad;
