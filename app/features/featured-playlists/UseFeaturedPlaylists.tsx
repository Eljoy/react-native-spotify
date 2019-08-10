import { useEffect, useRef, useState } from 'react';
import { useApi } from '../../core';
import { ListFetchParams } from '../../core/types/Api';
import Spotify from '../../core/types/Spotify';

interface UseFeaturedPlaylists {
  playlists: Spotify.Playlist[];
  allFetched: boolean;
  fetchMore(): Promise<void>;
}

function useFeaturedPlaylists({
  offset,
  limit
}: ListFetchParams = {}): UseFeaturedPlaylists {
  const api = useApi();
  const [playlists, setPlaylists] = useState<Spotify.Playlist[]>([]);
  const [allFetched, setAllFetched] = useState(false);
  const fetchParams = useRef({
    offset: offset || 0,
    limit: limit || 20
  });

  async function fetchMore() {
    if (allFetched) {
      return;
    }
    const newPlaylists = await api.getFeaturedPlaylists(fetchParams.current);
    if (newPlaylists.length < fetchParams.current.limit) {
      setAllFetched(true);
    }
    fetchParams.current.offset += newPlaylists.length;
    setPlaylists([...playlists, ...newPlaylists]);
  }

  useEffect(() => {
    fetchMore();
  }, []);

  return {
    playlists,
    allFetched,
    fetchMore
  };
}

export default useFeaturedPlaylists;
