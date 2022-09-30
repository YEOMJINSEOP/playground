import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <h1>Profile</h1>
    <button onClick={() => {}}>Go to Profile</button>
  </>
  )
}


export default Home;