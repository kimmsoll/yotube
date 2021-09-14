import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Nav from "./components/navbar/nav";
import VideoList from "./components/videoList/video_list";

function App({youtube}){
  const [ videos, setVideos ] = useState([]);

  const search = query => {
    youtube.search(query)
      .then(items => setVideos(items))
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
    <VideoList videos={videos}></VideoList>
    </>
  );
}

export default App;
