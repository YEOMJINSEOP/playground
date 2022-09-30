import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
      <header>
        {onLogOut && (
          <button onClick={onLogout}>Logout</button>
        )}
      </header>
  );

export default Header;