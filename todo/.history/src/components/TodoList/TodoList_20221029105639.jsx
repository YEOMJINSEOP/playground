import React, { useState } from 'react';


function List(props) {
  [list, setList] = useState('');
  return (
    <div>
      <ul>
        <li>사과 장보기</li>
        <li>배 깎아 먹기</li>
      </ul>
    </div>
  );
}

export default List;