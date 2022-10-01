import React from 'react';
import AuthService from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = (props) => {

  const onLogout = () => {
      AuthService.logout();
  };
  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <Footer/>
    </section>
  )
}

export default Maker;