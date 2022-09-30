import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home/>}/>  
        <Route path="/home" element={<Home/>}/>  
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//exact는 path 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링되도록 돕습니다. 
//만일 exact를 사용하지 않으면 path="/" 인 라우터는 /products 경로에서도 반응하게 됩니다. 