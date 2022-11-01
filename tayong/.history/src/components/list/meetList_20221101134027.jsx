import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './meetList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';


function MeetList(props) {
  const [meetList, setMeetList] = useState([]);
  let param = useParams();
  console.log(param['*']);

  useEffect(() => {
    fetch('data/meet.json')
    .then(res => res.json())
    .then(data => {
      console.log('데이터를 잘 받아왔습니다.');
      setMeetList(data);
    });
  }, [])
  
  return (
    <div className={styles.meetList}>
      <div className={styles.location}>
        <div className={styles.locationDeparture}>
          <label htmlFor='departure'>출발</label>
          <input
              type="text"
              id='departure'
              name='departure'
              value = '디지털미디어시티'
              onChange={() => {
                console.log('');
              }}
          />
        </div>
      <FaArrowRight className={styles.locationArrow}/>
      <div className={styles.locationArrival}>
        <label htmlFor='arrival'>도착</label>
          <input
              type="text"
              id='arrival'
              name='arrival'
              value = '한국항공대'
              onChange={() => {
                console.log('');
              }}
          />    
        </div>    
      </div>
      <div className={styles.listContainer}>
        
      </div>
    </div>
  );
}

export default MeetList;