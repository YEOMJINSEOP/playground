import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("https://a7gb13kbg7.execute-api.ap-northeast-2.amazonaws.com/dev/list")
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);
  
  return (
    <>
    <p>hi</p>
    </>
  )
}

export default App;
