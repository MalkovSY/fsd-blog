import axios from 'axios';
import { AUTH_LOCALSTORAGE_KEY } from 'features/AuthByUsername';

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: localStorage.getItem(AUTH_LOCALSTORAGE_KEY),
  },
});
