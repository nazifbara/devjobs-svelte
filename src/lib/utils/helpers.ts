import type { QuerySnapshot } from 'firebase/firestore';

export const toArrayQuerySnap = <T>(query: QuerySnapshot) =>
	query.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as T[];

export const getLastDocSnap = (query: QuerySnapshot) => query.docs[query.docs.length - 1];
