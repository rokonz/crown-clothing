/* src/utils/firebase/firebase.utils.ts */
// utility files for connecting to backend
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQzP5DGVUPfKaW8O37bK1ABzgYT6ogjM4",
    authDomain: "crown-clothing-211.firebaseapp.com",
    projectId: "crown-clothing-211",
    storageBucket: "crown-clothing-211.appspot.com",
    messagingSenderId: "532570111511",
    appId: "1:532570111511:web:29bb87b0322f4e1cc52652",
};

// Initialize Firebase (an instance of firebase)
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
