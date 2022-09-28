import React from 'react';
import { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBbOFJZ0wPaBnrt1n8uKB0kNdtN1EZ1KJ4", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  return <h1>Hello :)</h1>;
}

export default App;
