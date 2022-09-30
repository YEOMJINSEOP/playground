import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/auth';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;