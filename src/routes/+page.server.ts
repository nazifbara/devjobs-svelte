import { getList } from '$lib/firebase';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const jobs = await getList('jobs');
	return {
		jobs
	};
}) satisfies PageServerLoad;
