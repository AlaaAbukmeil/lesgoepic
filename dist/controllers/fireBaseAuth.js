"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOutUser = exports.logInUser = exports.signUpUser = void 0;
const auth_1 = require("firebase/auth");
const firebaseConnection_1 = __importDefault(require("./firebaseConnection"));
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.lesgoepic.com/',
    // This must be true.
    handleCodeInApp: true,
};
// Initialize Firebase Authentication and get a reference to the service
const auth = (0, auth_1.getAuth)(firebaseConnection_1.default);
const provider = new auth_1.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});
async function signUpUser(email, password) {
    await (0, auth_1.createUserWithEmailAndPassword)(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return auth.currentUser;
}
exports.signUpUser = signUpUser;
async function logInUser(email, password) {
    await (0, auth_1.signInWithEmailAndPassword)(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return auth.currentUser;
}
exports.logInUser = logInUser;
async function logOutUser() {
    await (0, auth_1.signOut)(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    return auth.currentUser;
}
exports.logOutUser = logOutUser;
exports.default = auth;
