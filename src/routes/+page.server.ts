import { limit, orderBy } from 'firebase/firestore';

import type { PageServerLoad } from './$types';
import { getList } from '$lib/firebase';
import { toArrayQuerySnap } from '$lib/utils/helpers';
import type { Job } from '$lib/types';

export const load = (async () => {
	const querySnap = await getList('jobs', orderBy('postedAt'), limit(9));
	const jobs = toArrayQuerySnap<Job>(querySnap);

	return {
		jobs
	};
}) satisfies PageServerLoad;
