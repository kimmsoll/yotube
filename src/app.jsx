import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Nav from "./components/navbar/nav";
import VideoList from "./components/videoList/video_list";

function App() {
  const [ videos, setVideos ] = useState([]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_TRENDING_API}`, requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  },[])

  return (
    <>
    <Nav></Nav>
    <VideoList videos={videos}></VideoList>
    </>
  );
}

export default App;
