import { memo } from "react";

const Video = memo((props) => {
    return(
        <li onClick={() => props.onClick(props.video)}>
            <div className="video">
                <img className="video__thumbnail" src={props.thumbnail} alt="thumbnail"/>
                <span className="video__title">{props.title}</span>
                <span className="video__channelTitle">{props.channelTitle}</span>
            </div>
        </li>
    )
});

export default Video;