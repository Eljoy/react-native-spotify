import Spotify from '../types/Spotify';

export interface ListFetchParams {
  limit?: number;
  offset?: number;
}

export interface Api {
  getFeaturedPlaylistPreviews(
    listFetchParams?: ListFetchParams
  ): Promise<Spotify.PlaylistPreview[]>;

  getPlaylist(id: string): Promise<Spotify.Playlist>;
}
