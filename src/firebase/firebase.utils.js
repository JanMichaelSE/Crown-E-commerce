import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC-BMJEoOWmL_bT6M0plvQqo_CuvTLVy0c',
  authDomain: 'crown-clothing-a158f.firebaseapp.com',
  databaseURL: 'https://crown-clothing-a158f.firebaseio.com',
  projectId: 'crown-clothing-a158f',
  storageBucket: 'crown-clothing-a158f.appspot.com',
  messagingSenderId: '840907352235',
  appId: '1:840907352235:web:b2334f78c96461c1f06fee',
  measurementId: 'G-NJPVP23KHK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`user/${userAuth.uid}`);

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
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;