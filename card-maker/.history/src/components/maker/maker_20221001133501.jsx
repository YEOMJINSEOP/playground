import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = (props) => {
  const navigate = useNavigate();
  
  const onLogout = () => {
      AuthService.logout();
  };

  useEffect(() => {
    AuthService.onAuthChange(user => {
      if(!user){

      }
    })
  })
  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <Footer/>
    </section>
  )
}

export default Maker;