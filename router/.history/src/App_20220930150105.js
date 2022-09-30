import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
