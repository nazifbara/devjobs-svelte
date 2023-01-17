import type { PageServerLoad } from './$types';
import { getListOf } from '$lib/utils/apiClient';

export const load = (async () => {
	const jobs = await getListOf('jobs');

	return {
		jobs
	};
}) satisfies PageServerLoad;
