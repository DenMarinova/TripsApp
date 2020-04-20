import axios from 'axios';
import globalStore from './store/global';

const instance = axios.create({
    baseURL: 'https://trips-b868f.firebaseio.com/',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use(config => {
    config.url = `${config.url}?auth=${globalStore.getToken}`;
    return config; 
});

export default instance;