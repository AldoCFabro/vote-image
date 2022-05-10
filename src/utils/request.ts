import { Buffer } from 'buffer';
import axios from 'axios';

const user = process.env.APP_API_ALEGRA_USERNAME;
const token = process.env.APP_API_ALEGRA_TOKEN;
const tokenString = `${user}:${token}`;

// **** two ways to transform string to base 64 ***
// const authHeader = window.btoa(tokenString);
const authHeader = Buffer.from(tokenString).toString('base64');
// **** two ways to transform string to base 64 ***

const request = axios.create({
  baseURL: process.env.APP_API_ALEGRA_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  async (request: any) => {
    try {
      request['headers']['Authorization'] = `Basic ${authHeader}`;
    } catch (e: any) {
      throw new axios.Cancel(e);
    }

    return request;
  },
  (error) => {
    // Do something with request error
    console.debug(error); // for debug
    return Promise.reject(error);
  }
);

export default request;
