import axios from 'axios';

const KEY = 'YOUR KEY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type: 'video',
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
