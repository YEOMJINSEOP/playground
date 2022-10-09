import React from 'react';
import { useEffect } from 'react';
import styles from './app.module.css';

function App() {

  useEffect(() => {
    document.addEventListener('scroll', (event) => {
      console.log('hi');
    })
  })
  return(
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p className={styles.sideLogo}>같이, </p>
          <h1 className={styles.mainLogo}>TAYONG</h1>
        </div>
        <img className={styles.logoImage} src="/images/handshake.png" alt="tayong image" />
        <button className={styles.button}>같이 이동할 사람 구하기</button>
      </div>
      <div className={styles.container2}>
        <h1>hello!</h1>
      </div>
    </>    
  )
}

export default App;
