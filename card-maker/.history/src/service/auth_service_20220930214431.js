import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
import 'firebase/compat/firestore';

import firebaseApp from './firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;