import React from 'react';
import Video from '../video/video';

const VideoList = ({videos}) => {
    return (
        <ul className="video_list">
        {videos.map(video => (
        <Video
        key={video.id}
        thumbnail={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        channelTitle={video.snippet.channelTitle}
        />))}
        </ul>
    );
}

export default VideoList;