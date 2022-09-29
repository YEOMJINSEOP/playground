import React from 'react';

const VideoDetail = (props) => (
      <section className={styles.detail}>
        <iframe
          className={styles.video} 
          id="ytplayer" 
          type="text/html" 
          width="100%" 
          height="500px"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          frameborder="0" 
          allowfullscreen>
          </iframe>
      </section>
  );

export default VideoDetail;