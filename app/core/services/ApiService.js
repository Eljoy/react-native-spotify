const BASE_API_URL = "https://afternoon-waters-49321.herokuapp.com";

class ApiService {
  getFeaturedPlaylists = async ({ limit = 20, offset = 0 }) => {
    const response = await fetch(`${BASE_API_URL}/v1/browse/featured-playlists?limit=${limit}&offset=${offset}`);

    const { status } = response;
    const result = await response.json();

    if (status === 200) {
      return result;
    }

    return Promise.reject(new Error(status));
  };

  getPlaylistDetails = async (id) => {
    const fields = "id,name,description,owner,images,followers,tracks";
    const response = await fetch(`${BASE_API_URL}/v1/playlists/${id}?fields=${fields}`);

    const { status } = response;
    const result = await response.json();

    if (status === 200) {
      return result;
    }

    return Promise.reject(new Error(status));
  };
}

export default new ApiService();
