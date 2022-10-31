import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('/data/product.json')
    .then(res => res.json())
    .then(
      setProduct(product)
    )

  }, [])
  return (
    <>
      <input 
        type="text"
        id='product'
        name='product'
        placeholder='상품을 입력하세요..'
      ></input>
    </>
  );
}

export default App;
