import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import type { Job } from '$lib/types';
import { getById } from '$lib/utils/apiClient';

export const load = (async ({ params: { id } }) => {
	const job = await getById<Job>('jobs', id);

	if (!job) {
		throw error(404, {
			message: 'Job not found'
		});
	}

	return {
		job
	};
}) satisfies PageServerLoad;
