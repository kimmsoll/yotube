import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Nav from "./components/navbar/nav";
import VideoList from "./components/videoList/video_list";
import VideoDetail from './components/videoDetail/video_detail';

function App({youtube}){
  const [ videos, setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    setSelectedVideo(null);
    youtube.search(query)
      .then(items => {
        setVideos(items);
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    youtube.trending()
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  },[])

  return (
    <>
    <Nav onSearch={search}></Nav>
    {selectedVideo ? 
      (<div className="contents">
      <section className="grid">
        <VideoDetail video={selectedVideo}/>
      </section>
      <section className="list">
        <VideoList videos={videos} onClick={selectVideo}></VideoList>
      </section>
      </div>)
    :
      (<VideoList videos={videos} onClick={selectVideo}></VideoList>)
    }
    </>
  );
}

export default App;
