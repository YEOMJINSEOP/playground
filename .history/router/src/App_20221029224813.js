import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
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


