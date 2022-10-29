import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Homepage from './pages/HomePage';
import List from './pages/List';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <p>Not Found 🐶</p>
  },
  {
    path: '/profile',
    element: <List/>
  },

]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;


