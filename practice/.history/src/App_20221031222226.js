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
      <div>
        <input 
          type="text"
          id='product'
          name='product'
          placeholder='상품을 입력하세요..'
          onChange = {
            (e) => {
              setInputStr(e.target.value);
              console.log(e.target.value);

            }
          }
        >
        </input>
        <select>
          <option value="waffle">waffle</option>
          <option value="sandwiches">sandwiches</option>
        </select>

      </div>
      <ul>
        {product.filter((item) => {
          if(inputStr == ""){return item}
          else if(item.name.toLowerCase().includes(inputStr.toLowerCase())){
            return item
          }
        }).map((item) => {
          return <select value={item.name}>{item.name}</select>
        })
        }
      </ul>


    </>
  );
}

export default App;