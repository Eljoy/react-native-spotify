declare namespace Spotify {
  interface Image {
    url: string;
  }

  interface Artist {
    name: string;
  }

  interface PlaylistFollowers {
    total: number;
  }

  interface PlaylistOwner {
    displayName: string;
  }

  export interface Track {
    id: string;
    name: string;
    artists: Artist[];
    duration_ms: number;
    preview_url?: string;
  }

  export interface TrackItem {
    track: Track;
  }

  export interface PlaylistPreview {
    id: string;
    images: Image[];
    name: string;
    tracks: {
      href: string;
      total: number;
    };
  }

  export interface Playlist {
    id: string;
    name: string;
    description: string;
    owner: PlaylistOwner;
    images: Image[];
    followers: PlaylistFollowers;
    tracks: {
      items: TrackItem[];
    };
  }
}

export default Spotify;
