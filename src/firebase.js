import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAD3B2VEpxm1jWz7cVnxag4_wp94T9scW4",
    authDomain: "whatsapp-clone-fe47f.firebaseapp.com",
    projectId: "whatsapp-clone-fe47f",
    storageBucket: "whatsapp-clone-fe47f.appspot.com",
    messagingSenderId: "896810549957",
    appId: "1:896810549957:web:baeb3863162059243f26ac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
