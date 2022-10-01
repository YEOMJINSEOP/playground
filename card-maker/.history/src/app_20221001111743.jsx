import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';

function App({authService}) {
  return(
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route>
            <Login authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
