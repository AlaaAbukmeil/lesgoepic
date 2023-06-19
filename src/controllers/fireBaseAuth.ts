
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "firebase/auth";
require("dotenv").config()

const firebaseConfig = {
    apiKey: process.env.FBAPIKEY,
    authDomain: process.env.FBAUTHDOMAIN,
    projectId: process.env.FBPROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.FBMESSAGINGSENDERID,
    appId: process.env.FBAPPID,
    measurementId: process.env.FBMEASUREMENTID

};

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.lesgoepic.com/',
    // This must be true.
    handleCodeInApp: true,
};

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(initializeApp(firebaseConfig));
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});


export async function signUpUser(email: string, password: string): Promise<User | null> {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return auth.currentUser

}

export async function logInUser(email: string, password: string): Promise<User | null> {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return auth.currentUser

}