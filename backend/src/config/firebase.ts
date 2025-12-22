import * as admin from "firebase-admin";
import { config } from "./index";

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: config.FIREBASE.PROJECT_ID,
            clientEmail: config.FIREBASE.CLIENT_EMAIL,
            privateKey: config.FIREBASE.PRIVATE_KEY ? config.FIREBASE.PRIVATE_KEY.replace(/\\n/g, '\n') : undefined
        })
    });
    console.log('Firebase Admin Initialized successfully');
} catch (error) {
    console.error('Firebase Admin Initialization failed:', error);
}

export const db = admin.firestore();
export default admin;