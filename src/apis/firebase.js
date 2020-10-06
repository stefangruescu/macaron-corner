import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

let providerGoogle = new firebase.auth.GoogleAuthProvider();
let providerFacebook = new firebase.auth.FacebookAuthProvider();
export function signInWithGoogle() {
	return firebase.auth().signInWithPopup(providerGoogle);
}

export function signInWithFacebook() {
	return firebase.auth().signInWithPopup(providerFacebook);
}

export function signOut() {
	return firebase.auth().signOut();
}
