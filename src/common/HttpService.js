import axios from 'axios';

import { API_URL } from '@environment';

class HttpService {
  constructor() {
    this.instance = axios.create({ baseURL: API_URL });
  }

  async post(...args) {
    return this.instance.post(...args);
  }
}

export default new HttpService();
