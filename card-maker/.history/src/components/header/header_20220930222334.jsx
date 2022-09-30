import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
      <header>
        {onLogout && (
          <button onClick={onLogout}>Logout</button>
        )}
        <img src="/images/logo.png" alt="" />
      </header>
  );

export default Header;