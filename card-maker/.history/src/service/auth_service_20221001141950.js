import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout(){
    firebase.auth().signOut();
  }

  //사용자가 로그인 했는지, 로그아웃 했는지 상태를 볼 수 있는 함수
  onAuthChange(onUserChanged){
    //user는 사용자 정보가 바뀔 때마다 전달받는 정보
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }
}

export default AuthService;