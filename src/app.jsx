import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import Nav from "./components/navbar/nav";
import VideoList from "./components/videoList/video_list";

function App(){
  const [ videos, setVideos ] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${process.env.REACT_APP_DATA_API}`, requestOptions)
      .then(response => response.json())
      // map 안에서 obj 를 ()로 묶어주니 에러가 사라짐
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_DATA_API}`, requestOptions)
    .then(response => response.json())
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
