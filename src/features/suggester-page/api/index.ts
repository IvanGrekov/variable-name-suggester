import axios from 'axios';

const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME || 'http://localhost';
const SERVER_PORT = process.env.NEXT_PUBLIC_SERVER_PORT || 3001;
const SERVER_URL = `${SERVER_NAME}:${SERVER_PORT}`;

const API = axios.create({
    baseURL: `${SERVER_URL}/api`,
});

export default API;
