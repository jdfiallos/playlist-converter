import axios from 'axios';
import { useStore } from '@nanostores/preact';
import { accessToken as storeAccessToken } from '../store/accessToken';   

const instance = axios.create({
    baseURL: 'http://localhost:4321/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const $accessToken = useStore(storeAccessToken); 

instance.defaults.headers.common['Authorization'] = $accessToken;

export default instance;
