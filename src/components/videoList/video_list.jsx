import React from 'react';
import Video from '../video/video';

const VideoList = (props) => {
    return (
        <ul className="video_list">
        {props.videos.map(video => (
        <Video
        key={video.id}
        thumbnail={video.snippet.thumbnails.default.url}
        title={video.snippet.title}
        channelTitle={video.snippet.channelTitle}
        />))}
        </ul>
    );
}

export default VideoList;