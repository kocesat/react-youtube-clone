import axios from 'axios';

const KEY = 'AIzaSyAoe6oj6Bv-se8UHBWL6SOhB7C5Xxa-8qo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type: 'video',
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
