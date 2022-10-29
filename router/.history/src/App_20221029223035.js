import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <p>Not Found 🐶</p>
  },
  {
    path: '/profile',
    element: <Profile/>
  },

]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;


