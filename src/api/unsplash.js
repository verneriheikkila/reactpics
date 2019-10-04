import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 504c3bfea79d4191236783c97bb10bd66d1ac890696d150fe01c6730aa6b4674'
    }
});
