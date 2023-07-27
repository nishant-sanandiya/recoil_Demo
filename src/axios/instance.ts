import Axios from 'axios';
import {BASE_URL} from '../constants/index';

export const AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});
