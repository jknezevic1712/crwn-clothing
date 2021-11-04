import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC1zDlJlZM_v_tPxwfraU0G-t00P58H8VI",
  authDomain: "crwn-db-f27e9.firebaseapp.com",
  projectId: "crwn-db-f27e9",
  storageBucket: "crwn-db-f27e9.appspot.com",
  messagingSenderId: "908776252131",
  appId: "1:908776252131:web:2e2f8328c6fd32b4b01bd6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
