import React from 'react';

const Video = (props) => {
    return(
        <div className="video">
            <img className="video__thumbnail" src={props.thumbnail} alt="thumbnail"/>
            <span className="video__title">{props.title}</span>
            <span className="video__channelTitle">{props.channelTitle}</span>
        </div>
    );
}

export default Video;