import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'nextauth.token': token } = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

if (token) {
  api.defaults.headers['Authorization'] = `Baerer ${token}`;
}
