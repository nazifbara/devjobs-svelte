import { limit, QueryConstraint, startAfter, orderBy } from 'firebase/firestore';

import { getList, getItem } from '$lib/firebase';
import { toArrayQuerySnap, searchTermsToConstraints, toObjectDocSnap } from '$lib/utils/helpers';
import { ENTITIES_COUNT_LIMIT } from '$lib/utils/constants';
import type { Job, EntityWithId, AnyProp } from '$lib/types';

export const searchFor = async (path: string, searchTerms: AnyProp) => {
	const queryContraints: QueryConstraint[] = searchTermsToConstraints(searchTerms);
	return toArrayQuerySnap<Job>(
		await getList(path, ...[...queryContraints, limit(ENTITIES_COUNT_LIMIT)])
	);
};

export const getById = async <T>(path: string, id: string) =>
	toObjectDocSnap<T>(await getItem(path, id));

export const getListOf = async <T>(path: string) =>
	toArrayQuerySnap<T>(await getList(path, orderBy('postedAt'), limit(ENTITIES_COUNT_LIMIT)));

export const getMoreOf = async (
	path: string,
	entities: EntityWithId[],
	searchTerms: AnyProp = {}
) => {
	const lastJob = await getItem(path, entities[entities.length - 1].id);
	return toArrayQuerySnap<Job>(
		await getList(
			path,
			orderBy('postedAt'),
			startAfter(lastJob),
			limit(ENTITIES_COUNT_LIMIT),
			...searchTermsToConstraints(searchTerms)
		)
	);
};
