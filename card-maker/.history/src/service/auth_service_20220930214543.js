import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/auth";
<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-auth.js"></script>
import firebaseApp from './firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;