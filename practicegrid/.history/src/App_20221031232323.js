import './App.css';
import { useEffect } from 'react';

function App() {

  fetch("https://a7gb13kbg7.execute-api.ap-northeast-2.amazonaws.com/dev/list",
  {
    mode:'no-cors',
  })
  .then(res => {return res.text()})
  .then((data) => data ? JSON.parse(data) : {})
  .catch((error) => {
    console.error("error!")
  })
  
  return (
    <>
    <p>hi</p>
    </>
  )
}

export default App;