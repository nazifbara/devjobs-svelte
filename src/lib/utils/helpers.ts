import type { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

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
