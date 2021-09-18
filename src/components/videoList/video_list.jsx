import React from 'react';
import Video from '../video/video';

const VideoList = ({videos, onClick}) => {
    return (
        <ul className="video_list">
        {videos.map(video => (
            <Video
            onClick={onClick}
            video={video}
            key={video.id}
            id={video.id}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            />
            ))}
        </ul>
    );
}

export default VideoList;