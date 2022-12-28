import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

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

export let firebaseApp: FirebaseApp | null = null;

export const initializeFirebase = () => (firebaseApp = initializeApp(config));
