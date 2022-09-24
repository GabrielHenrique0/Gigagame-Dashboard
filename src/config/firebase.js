import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBQlScGN6OG6ohQxPBKc4y8ucOVCn-SWE0",
  authDomain: "gigachad-14882.firebaseapp.com",
  databaseURL: "https://gigachad-14882-default-rtdb.firebaseio.com",
  projectId: "gigachad-14882",
  storageBucket: "gigachad-14882.appspot.com",
  messagingSenderId: "570842322546",
  appId: "1:570842322546:web:cd86ee7792a3a3594d94eb",
  measurementId: "G-QCWPWYG9FZ"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
