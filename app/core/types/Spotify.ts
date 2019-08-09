// eslint-disable-next-line @typescript-eslint/no-namespace
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
    preview_url?: string;
  }

  export interface TrackItem {
    track: Track;
  }

  export interface Playlist {
    id: string;
    images: Image[];
    name: string;
    tracks: {
      href: string;
      total: string;
    };
  }

  export interface PlaylistDetails {
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
