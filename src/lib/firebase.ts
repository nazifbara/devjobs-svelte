import { initializeApp } from 'firebase/app';
import {
	collection,
	query,
	getDocs,
	getDoc,
	initializeFirestore,
	CACHE_SIZE_UNLIMITED,
	QueryConstraint,
	doc
} from 'firebase/firestore';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';

import {
	PUBLIC_FIREBASE_FIREBASE_APIKEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_STORAGE_BUCKET,
	PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	PUBLIC_FIREBASE_APP_ID
} from '$env/static/public';

const config = {
	apiKey: PUBLIC_FIREBASE_FIREBASE_APIKEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: PUBLIC_FIREBASE_APP_ID
};

let firebaseApp: FirebaseApp;

let firestore: Firestore;

export const initializeFirebase = () => (firebaseApp = initializeApp(config));

export const getFirebaseApp = () => {
	if (!firebaseApp) {
		initializeFirebase();
	}
	return firebaseApp;
};

export const db = (): Firestore => {
	if (!firestore) {
		firestore = initializeFirestore(getFirebaseApp(), { cacheSizeBytes: CACHE_SIZE_UNLIMITED });
	}
	return firestore;
};

export const getList = async (path: string, ...queryConstraint: QueryConstraint[]) => {
	const q = query(collection(db(), path), ...queryConstraint);
	return await getDocs(q);
};

export const getItem = async (path: string, id: string) => {
	const docRef = doc(db(), path, id);
	return await getDoc(docRef);
};
