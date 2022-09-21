import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE0CPC08kRV4B2aHhiPSeMgX-HXqT9MpI",
  authDomain: "uber-eats-rn-b5d5d.firebaseapp.com",
  projectId: "uber-eats-rn-b5d5d",
  storageBucket: "uber-eats-rn-b5d5d.appspot.com",
  messagingSenderId: "547147633951",
  appId: "1:547147633951:web:ef4e15c56514f907658c2a",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
