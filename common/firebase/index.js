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

const usersRef = collection(db, "usersv2");
const imagesRef = collection(db, "imagesv2");

async function getPrimaryImages(count) {
  const filter = query(
    imagesRef,
    orderBy("creationTime", "desc"),
    limit(count)
  );
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}
async function getUserImages(email) {
  const filter = query(
    imagesRef,
    orderBy("creationTime", "desc"),
    where("author", "==", email)
  );
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}

async function addImage(req) {
  await addDoc(imagesRef, req);
}
async function getImageById(src) {
  const filter = query(imagesRef, where("src", "==", src));
  const response = await getDocs(filter);
  const image = response.docs.map((doc) => ({ id: doc.id }));
  const imageRef = doc(db, "imagesv2", image[0]?.id);
  return imageRef;
}
async function addComment(req) {
  const imageRef = await getImageById(req.src);
  await updateDoc(imageRef, {
    commnents: arrayUnion(req.commentValue),
  });
}

async function getUserById(req) {
  const filter = query(usersRef, where("email", "==", req.email));
  const response = await getDocs(filter);
  const user = response.docs.map((doc) => ({ id: doc.id }));
  const userRef = doc(db, "usersv2", user[0]?.id);
  return userRef;
}

async function getUser(req) {
  const filter = query(usersRef, where("email", "==", req.email));
  const response = await getDocs(filter);
  const user = response.docs.map((doc) => doc.data());
  if (user[0]?.email === req.email) {
    return user[0];
  } else if (!user.length) {
    const accountHistory = [
      { creationTime: Date.now(), action: "Joined decocanva" },
    ];
    const newUser = {
      email: req.email,
      hasPlan: false,
      balance: 300,
      tutorialStep: -1,
      configurated: false,
      accountHistory,
      isPrivate: true,
      isVerified: false,
      displayName: req.displayName,
      profileImage: req.photoURL,
      accountLevel: 1,
      accountExperience: 0,
    };
    await addDoc(usersRef, newUser);
    const response = await getDocs(filter);
    const user = response.docs.map((doc) => doc.data());
    return user[0];
  }
}
async function updateUserHistory(user) {
  const userRef = await getUserById(user);
  await updateDoc(userRef, {
    accountHistory: arrayUnion(user.accountHistory),
  });
}
async function updateUserTutorial(user) {
  const userRef = await getUserById(user);
  await updateDoc(userRef, {
    tutorialStep: user.tutorial,
  });
}
async function updateUser(user, newUser) {
  const userRef = await getUserById(user);
  const filter = query(usersRef, where("userName", "==", newUser.userName));
  const response = await getDocs(filter);
  const res = response.docs.map((doc) => doc.data());

  if (res[0]?.userName === newUser.userName) {
    return { error: "userName-Taken" };
  } else if (!res.length) {
    await updateDoc(userRef, { ...newUser, configurated: true });
    const filter = query(usersRef, where("userName", "==", newUser.userName));
    const response = await getDocs(filter);
    const res = response.docs.map((doc) => doc.data());
    return res;
  }
}
async function updateUserLevel(req) {
  const { level, pointsToAdd, accountExperience, pointsNeeded } = req;

  const userRef = await getUserById(req);
  if (accountExperience + pointsToAdd > pointsNeeded) {
    await updateDoc(userRef, {
      accountExperience: pointsToAdd + accountExperience - pointsNeeded,
      accountLevel: level + 1,
    });
  } else {
    await updateDoc(userRef, {
      accountExperience: accountExperience + pointsToAdd,
    });
  }
}

//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
export {
  //providers
  provider,
  storage,
  auth,
  //images
  getUserImages,
  addImage,
  getPrimaryImages,
  addComment,
  //users
  getUser,
  updateUserHistory,
  updateUserTutorial,
  updateUserLevel,
  updateUser,
};
