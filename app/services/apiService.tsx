import { Api } from './types';

const BASE_API_URL = 'https://afternoon-waters-49321.herokuapp.com';

class ApiService implements Api {
  async getFeaturedPlaylistPreviews({ limit = 20, offset = 0 } = {}) {
    const response = await fetch(
      `${BASE_API_URL}/v1/browse/featured-playlists?limit=${limit}&offset=${offset}`
    );
    return response.json().then(result => result.playlists.items);
  }

  async getPlaylist(id: string) {
    const fields = 'id,name,description,owner,images,followers,tracks';
    const response = await fetch(
      `${BASE_API_URL}/v1/playlists/${id}?fields=${fields}`
    );
    return response.json();
  }
}

export default new ApiService();
