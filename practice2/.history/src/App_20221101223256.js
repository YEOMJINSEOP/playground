import './App.css';
import { useEffect } from 'react';

function App() {

  fetch("https://ydj2kw5pg7.execute-api.ap-northeast-2.amazonaws.com/dev/list")
  .then(res => res.text())
  .then((data) =>{
    console.log('데이터가 도착했습니다');
    console.log(data? data.json() : {'data 없음':'true'})})
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
