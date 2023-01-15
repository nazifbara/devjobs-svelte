import type { DocumentSnapshot, QuerySnapshot, QueryConstraint } from 'firebase/firestore';
import { where } from 'firebase/firestore';

import type { AnyProp } from '$lib/types';

export const searchTermsToConstraints = (searchTerms: AnyProp) =>
	Object.entries(searchTerms).reduce((prev: QueryConstraint[], curr) => {
		if (curr[1] === '') {
			return prev;
		}
		return [...prev, where(curr[0], '==', curr[1])];
	}, []);

export const toArrayQuerySnap = <T>(query: QuerySnapshot) =>
	query.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];

export const toObjectDocSnap = <T>(query: DocumentSnapshot): T | undefined => {
	const data = query.data();

	if (data) {
		return { id: data.id, ...data } as T;
	}

	return data;
};

export const getLastDocSnap = (query: QuerySnapshot) => query.docs[query.docs.length - 1];
