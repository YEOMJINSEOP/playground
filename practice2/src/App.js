import './App.css';
import { useEffect } from 'react';

function App() {

  fetch("https://a7gb13kbg7.execute-api.ap-northeast-2.amazonaws.com/dev/list",
  {
    mode:'no-cors',
  })
  .then(res => res.text())
  .then((data) =>{
    console.log(data ? JSON.parse(data) : {})
  })
  .catch((error) => {
    console.error(error)
  })
  
  return (
    <>
    <p>hi</p>
    </>
  )
}

export default App;
