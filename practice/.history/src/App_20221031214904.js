import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [inputStr, setInputStr] = useState('');

  useEffect(() => {
    fetch('/data/product.json')
    .then(res => res.json())
    .then( data => {
      console.log('데이터를 불러왔습니다.');
      setProduct(data);
    })
    .then(
      console.log(product)
    )
    
  }, [])

  return (
    <>
      <ul>
        {product.map((item) => {
          return <li>{item.name}</li>
        })
        }
      </ul>
      <input 
        type="text"
        id='product'
        name='product'
        placeholder='상품을 입력하세요..'
        onChange = {
          () => {
            console.log(this.value);
          }
        }
      ></input>
    </>
  );
}

export default App;
