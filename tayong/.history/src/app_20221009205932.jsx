import React from 'react';
import styles from './app.module.css';

function App() {
  return(
    <div className={styles.container}>
      <div className={styles.logo}>
        <p className={styles.sideLogo}>같이, </p>
        <h1 className={styles.mainLogo}>TAYONG</h1>
      </div>
      <img src="/images/handshake.png" alt="" />
    </div>
  )
}

export default App;
