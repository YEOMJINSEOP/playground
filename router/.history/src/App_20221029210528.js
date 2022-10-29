import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home!</div>
  },
  {
    path: '/videos',
    element: <div>Videos</div>
  },

]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;


