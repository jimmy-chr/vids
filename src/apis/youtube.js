import axios from 'axios';

const KEY = 'AIzaSyAThr38FBTStggtVMyyqo4_pdkwvc_hTow';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
