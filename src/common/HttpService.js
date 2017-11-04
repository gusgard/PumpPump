import axios from 'axios';

import { API_URL, API_PARAMS } from '@environment';

class HttpService {
  constructor() {
    this.instance = axios.create({ baseURL: API_URL, body: API_PARAMS });
  }

  async post(...args) {
    return this.instance.post(...args);
  }
}

export default new HttpService();
