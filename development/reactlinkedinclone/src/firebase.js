import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1Iz4NeEzAOWxOtx_E1G-SB6FAxoLN4h4",
    authDomain: "linkedin-clone-yt-149f2.firebaseapp.com",
    projectId: "linkedin-clone-yt-149f2",
    storageBucket: "linkedin-clone-yt-149f2.appspot.com",
    messagingSenderId: "1018753398710",
    appId: "1:1018753398710:web:d9e53a66189622ad1df317",
    measurementId: "G-PB8BRKRJ4P"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  
  export { db, auth};