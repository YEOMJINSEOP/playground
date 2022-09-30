import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
import * as firebase from 'firebase';

import firebaseApp from './firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;