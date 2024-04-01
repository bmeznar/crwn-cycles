import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeQkEQrb3EGb6gR5I3tfFkrtJmOxkJo2w",
  authDomain: "crwn-cycles.firebaseapp.com",
  projectId: "crwn-cycles",
  storageBucket: "crwn-cycles.appspot.com",
  messagingSenderId: "32127719555",
  appId: "1:32127719555:web:c4e81792e336a0402963b6",
  measurementId: "G-4YSBJLHE4J"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  // Check if user already exists.
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user doesn't exist already we create a new one.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocRef;
};