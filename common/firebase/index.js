import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
  orderBy,
  updateDoc,
  doc,
  arrayUnion,
  getDoc,
  setDoc,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import moment from "moment";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);
export async function pushLead(data) {
  const productDocRef = doc(collection(db, "leads"), data.id);
  const docSnap = await getDoc(productDocRef);
  if (docSnap.exists()) {
    return productDocRef;
  } else {
    await setDoc(productDocRef, {
      ...data,
      createdAt: Date.now(),
    });
    return productDocRef;
  }
}
export { provider, storage, auth };
