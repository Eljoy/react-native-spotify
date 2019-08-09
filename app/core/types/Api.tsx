import Spotify from './Spotify';

export interface ListFetchParams {
  limit?: number;
  offset?: number;
}

export interface Api {
  getFeaturedPlaylists(
    listFetchParams: ListFetchParams
  ): Promise<Spotify.Playlist[]>;

  getPlaylistDetails(id: number): Promise<Spotify.PlaylistDetails>;
}
