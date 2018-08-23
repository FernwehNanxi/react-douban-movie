import {post,get} from './axios.js';
const api="/v2/movie/";

export const playing=p=>get(api+'in_theaters',p);