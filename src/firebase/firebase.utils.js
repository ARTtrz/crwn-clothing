import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyA4iTPhRZ-jahkP-0_5hT-M0stq2u-JA2Y",
	authDomain: "crwn-db-project-b9ac9.firebaseapp.com",
	projectId: "crwn-db-project-b9ac9",
	storageBucket: "crwn-db-project-b9ac9.appspot.com",
	messagingSenderId: "916074436213",
	appId: "1:916074436213:web:9b9bb3571b651f60b38a3c",
	measurementId: "G-T5943V3JKR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


