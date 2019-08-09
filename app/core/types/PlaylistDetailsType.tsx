interface Image {
  url: string;
}

interface Artist {
  name: string;
}

interface Track {
  id: string;
  name: string;
  artists: Artist[];
  previewUrl: string;
}

interface Followers {
  total: number;
}

interface Owner {
  displayName: string;
}

export interface PlaylistDetails {
  id: string;
  name: string;
  description: string;
  owner: Owner;
  images: Image[];
  followers: Followers;
  tracks: {
    items: Track[];
  };
}
