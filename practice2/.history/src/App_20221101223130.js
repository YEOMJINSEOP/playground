import './App.css';
import { useEffect } from 'react';

function App() {

  fetch("https://ydj2kw5pg7.execute-api.ap-northeast-2.amazonaws.com/dev/list",
  {
    mode:'no-cors',
  })
  .then(res => res.text())
  .then((data) =>{
    console.log(data)})
  .catch((error) => {
    console.log('error!');
    console.error(error)
  })
  
  return (
    <>
    <p>hi</p>
    </>
  )
}

export default App;
