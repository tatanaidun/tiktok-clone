import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSJSFFqB-i3F65lp1R1QA3fac-xBPKBjg",
  authDomain: "tiktok-clone-tata.firebaseapp.com",
  databaseURL: "https://tiktok-clone-tata.firebaseio.com",
  projectId: "tiktok-clone-tata",
  storageBucket: "tiktok-clone-tata.appspot.com",
  messagingSenderId: "922815998996",
  appId: "1:922815998996:web:91b2714f4a1bc1a9508b01",
  measurementId: "G-H7S8F584H3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
