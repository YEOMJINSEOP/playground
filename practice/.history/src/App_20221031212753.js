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
      ></input>
    </>
  );
}

export default App;
