
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User } from "firebase/auth";
import fbAppConnect from "./firebaseConnection";


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.lesgoepic.com/',
    // This must be true.
    handleCodeInApp: true,
};

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(fbAppConnect);
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

export async function logOutUser(): Promise<User | null> {
    await signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    return auth.currentUser
}

export default auth;