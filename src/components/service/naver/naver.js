import axios from 'axios';

class Naver {
  constructor(id, secret) {
    this.id = id;
    this.secret = secret;
    this.naver = axios.create({
      headers: {
        'X-Naver-Client-Id': this.id,
        'X-Naver-Client-Secret': this.secret
      }
    });
    this.PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    this.URL = `${this.PROXY}/v1/search/movie.json`;
  }

  async search(query) {
    const response = await this.naver.get(this.URL, {
      params: {
        display: '20',
        query: query
      }
    });
    return response.data.items;
  }
}
export default Naver;
