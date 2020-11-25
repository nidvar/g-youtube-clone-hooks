import axios from 'axios';
const x = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg'
const API = 'AIzaSyAI3n3R9Tx1vCP4sOXMtSxR_02B7__ua6s';

const file = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: x
    }
})

export default file