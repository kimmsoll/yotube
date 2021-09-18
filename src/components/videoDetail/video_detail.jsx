import styles from "./video_detail.module.css";

// iframe 샘플
{/* <iframe id="ytplayer" type="text/html" width="720" height="405"
// url 을 {} 안에 넣음..!
src="https://www.youtube.com/embed/M7lc1UVf-VE"
frameborder="0" allowfullscreen></iframe> */}

const VideoDetail = ({ video }) => {
    return(
        <>
        <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen>
        </iframe>
        <h1 className={styles.title}>{video.snippet.title}</h1>
        <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
        <span className={styles.description}>{video.snippet.description}</span>
        </>
    )
}

export default VideoDetail;