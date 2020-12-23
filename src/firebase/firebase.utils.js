import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyCiM86GpvJ__9UnHrNrV1yjABA61V2F9eo",
    authDomain: "enterprise-shop.firebaseapp.com",
    projectId: "enterprise-shop",
    storageBucket: "enterprise-shop.appspot.com",
    messagingSenderId: "428209633903",
    appId: "1:428209633903:web:2d029292c6ac17120aab9a",
    measurementId: "G-YVE84R04W3"
  };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

