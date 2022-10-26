import React from 'react';
import { useEffect } from 'react';
import styles from './app.module.css';

function App() {
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

      <div className={styles.container}>
          <h3 className={styles.mainLogo}>TAYONG</h3>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ab soluta eum, fuga quisquam assumenda accusamus. Consequuntur, sit totam eveniet fugit praesentium esse aliquam illo quaerat laborum alias, dolorem at?</p>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ab soluta eum, fuga quisquam assumenda accusamus. Consequuntur, sit totam eveniet fugit praesentium esse aliquam illo quaerat laborum alias, dolorem at?</p>
      </div>
    </>    
  )
}

export default App;
