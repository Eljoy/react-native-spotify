import { Spotify } from '../index';
import { Api } from '../types/Api';

const BASE_API_URL = 'https://afternoon-waters-49321.herokuapp.com';

interface FeaturedPlaylistsResponse {
  message: string;
  playlists: {
    items: Spotify.Playlist[];
  };
}

class ApiService implements Api {
  async getFeaturedPlaylists({
    limit = 20,
    offset = 0
  }): Promise<Spotify.Playlist[]> {
    const response = await fetch(
      `${BASE_API_URL}/v1/browse/featured-playlists?limit=${limit}&offset=${offset}`
    );
    const { status } = response;
    const result: FeaturedPlaylistsResponse = await response.json();
    if (status === 200) {
      return result.playlists.items;
    }
    return Promise.reject(new Error(status.toString()));
  }

  async getPlaylistDetails(id: number): Promise<Spotify.PlaylistDetails> {
    const fields = 'id,name,description,owner,images,followers,tracks';
    const response = await fetch(
      `${BASE_API_URL}/v1/playlists/${id}?fields=${fields}`
    );
    const { status } = response;
    const result = await response.json();
    if (status === 200) {
      return result;
    }
    return Promise.reject(new Error(status.toString()));
  }
}

export default new ApiService();
