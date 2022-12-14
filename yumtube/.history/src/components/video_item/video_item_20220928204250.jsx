import React from 'react';
import styles from './video_item.module.css';
const VideoItem = (props) => (
  <li>
    <img 
    src={props.video.snippet.thumbnails.medium.url} 
    alt="video thumbnail" 
    />
    <div className="">
      <p>{props.video.snippet.title}</p>
      <p>{props.video.snippet.channelTitle}</p>
    </div>
  </li>
);


export default VideoItem;