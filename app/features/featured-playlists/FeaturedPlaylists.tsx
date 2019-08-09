import React, { PureComponent } from 'react';
import AppBackground from '../../core/components/layout/AppBackground';
import { Block, Header, Spotify } from '../../core';
import PlaylistPreviewCollection from './PlaylistPreviewCollection';

interface FeaturedPlaylistsProps {
  headerText: string;
  playlists: Spotify.Playlist[];

  onOpenPlaylist(playlist: Spotify.Playlist): void;
}

class FeaturedPlaylists extends PureComponent<FeaturedPlaylistsProps> {
  render() {
    const { headerText, playlists, onOpenPlaylist } = this.props;

    return (
      <AppBackground paddingScale={2}>
        <Block paddingVerticalScale={2}>
          <Header>{headerText}</Header>
        </Block>
        <PlaylistPreviewCollection
          playlists={playlists}
          onOpenPlaylist={onOpenPlaylist}
        />
      </AppBackground>
    );
  }
}

export default FeaturedPlaylists;
