import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },

]);

function App() {
  return (
    <RouterProvider router={router}/>;
  );
}

export default App;


