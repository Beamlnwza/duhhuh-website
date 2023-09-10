import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

import {
	PUBLIC_apiKey,
	PUBLIC_authDomain,
	PUBLIC_projectId,
	PUBLIC_storageBucket,
	PUBLIC_messagingSenderId,
	PUBLIC_appId
} from '$env/static/public'

const app = initializeApp({
	apiKey: PUBLIC_apiKey,
	authDomain: PUBLIC_authDomain,
	projectId: PUBLIC_projectId,
	storageBucket: PUBLIC_storageBucket,
	messagingSenderId: PUBLIC_messagingSenderId,
	appId: PUBLIC_appId
})
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { firestore, auth, storage }
