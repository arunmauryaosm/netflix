import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiP2Ao1mBcbxgQDZUitr2FFVc459i-ywE",
  authDomain: "netflix-clone-7f3bd.firebaseapp.com",
  projectId: "netflix-clone-7f3bd",
  storageBucket: "netflix-clone-7f3bd.appspot.com",
  messagingSenderId: "919411731320",
  appId: "1:919411731320:web:02450eefc5a120b647b68d"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };