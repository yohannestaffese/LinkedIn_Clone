// import firebase from "firebase";

// import "firebase/auth";
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/compat/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNtsDIZdxpJEczkpaY2t7OPWGXnG5Yxz8",
  authDomain: "linkedin-clone-c9e87.firebaseapp.com",
  projectId: "linkedin-clone-c9e87",
  storageBucket: "linkedin-clone-c9e87.appspot.com",
  messagingSenderId: "272190829026",
  appId: "1:272190829026:web:38b0bafee6ddda0543c9bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { db, auth };
// export default db;

