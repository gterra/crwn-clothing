import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyhoX2YBgxvY_f7YcZa6eet5rwofRFSMQ",
  authDomain: "crwn-db-eb6af.firebaseapp.com",
  databaseURL: "https://crwn-db-eb6af.firebaseio.com",
  projectId: "crwn-db-eb6af",
  storageBucket: "crwn-db-eb6af.appspot.com",
  messagingSenderId: "380079898557",
  appId: "1:380079898557:web:e7b10e9bfcdb47b0209cd4",
  measurementId: "G-NVS71X06KS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error saving user: ", error.message);
    }
  }

  return userRef;
};

export default firebase;
