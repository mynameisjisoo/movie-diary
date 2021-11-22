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
  }

  async search(query) {
    const response = await this.naver.get(
      'https://jisoo-proxy-server.herokuapp.com/https://openapi.naver.com/v1/search/movie.json',
      {
        params: {
          display: '20',
          query: query
        }
      }
    );
    return response.data.items;
  }
}
export default Naver;
