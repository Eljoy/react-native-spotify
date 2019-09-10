import React, { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { FlatList } from 'react-native';
import PlaylistDescription from './PlaylistDescription';
import useSelectedPlaylist from './useSelectedPlaylist';
import AppBackground from '../../components/layout/AppBackground';
import Hr from '../../components/Hr';
import MiniPlayer from '../player/MiniPlayer';
import PlaylistTrackItem from './PlaylistTrackItem';
import { usePlayer } from '../player';

interface NavigationParams {
  playlistId: number;
}

function PlaylistDetailsScreen() {
  const navigation = useNavigation<NavigationParams>();
  const playlistId = navigation.getParam('playlistId');
  const { playlist, doFetch } = useSelectedPlaylist(playlistId);
  const { playerState, playTrack } = usePlayer();

  useEffect(() => {
    doFetch();
  }, []);

  if (!playlist) {
    return null;
  }

  return (
    <AppBackground>
      <PlaylistDescription playlistDetails={playlist} />
      <Hr />
      <FlatList
        data={playlist.tracks.items}
        renderItem={({ item }) => (
          <PlaylistTrackItem
            track={item.track}
            onPress={() => playTrack(playlist, item.track)}
          />
        )}
        keyExtractor={item => item.track.id}
      />
      <MiniPlayer visible={!!playerState.currentTrack} />
    </AppBackground>
  );
}

export default PlaylistDetailsScreen;
