import axios from 'axios';
import env from '../config/env.json';
import authHeader from './AuthHeader';

// Creating a new axios instance where the base url is taken from the env
const instance = axios.create({
    baseURL: env.serverUri,
    headers: authHeader()
})