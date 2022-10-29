import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';


const router = createBrowserRouter([
  {
    path: "/home",
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


