import type { PageServerLoad } from './$types';
import { getListOf } from '$lib/utils/apiClient';
import type { Job } from '$lib/types';

export const load = (async () => {
	const jobs = await getListOf<Job>('jobs');

	return {
		jobs
	};
}) satisfies PageServerLoad;
