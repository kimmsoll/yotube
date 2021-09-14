class Youtube {
    constructor() {
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async search(query) {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${process.env.REACT_APP_DATA_API}`, this.requestOptions)
        .then(response => response.json())
        .then(result => result.items.map(item => ({...item, id:item.id.videoId})));
    }

    async trending(){
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_DATA_API}`, this.requestOptions)
    .then(response => response.json());
    }
}

export default Youtube;