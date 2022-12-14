import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { authConfig } from "./auth/config";

const app = getApps().length > 0 ? getApps()[0] : initializeApp(authConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('logged');
      return user.user;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export const logout = () => signOut(auth);