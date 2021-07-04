import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmA1D1et31jFcjqENGkiBqpa_EdfgGZvA",
    authDomain: "discord-clone-45eb1.firebaseapp.com",
    projectId: "discord-clone-45eb1",
    storageBucket: "discord-clone-45eb1.appspot.com",
    messagingSenderId: "128381239302",
    appId: "1:128381239302:web:0be9250ef1c97ba2c00387",
    measurementId: "G-0D4EFD705Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;
