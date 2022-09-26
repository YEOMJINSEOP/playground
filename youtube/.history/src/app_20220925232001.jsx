import React from 'react';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import { useCallback } from 'react';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(
    query => {
      youtube
        .search(query) //
        .then(videos => {
          setVideos(videos)
          setSelectedVideo(null)
        });
    } , []);

  //useEffect -> component나 prop이 mount되었거나 update 될 때마다 호출.
  //두번째 인자에 전달하는 데이터만 update될 때마다 호출되게 설정할 수 있다.
  //두번째 인자에 []를 전달하면 한 번만 만들고, 그것을 재사용한다.
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        { selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  )
}

export default App;
