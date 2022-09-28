import React from 'react';
import styles from  './search_header.module.css'

const SearchHeader = (props) => {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YumTube</h1>
      </div>
      <input className={styles.input} type="search" placeholder='Search..' />
      <button className={styles.button} type="submit">
        <img src="/images/search.png" alt="" />
      </button>
    </header>
  )
};  


export default SearchHeader;