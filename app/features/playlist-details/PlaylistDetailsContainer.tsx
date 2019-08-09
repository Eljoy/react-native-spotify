import React, { Component } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { withApi } from '../../core';
import PlaylistDetails from './PlaylistDetails';
import { WithApiProps } from '../../core/services/ApiProvider';

interface NavigationParams {
  playlistId: number;
}

interface PlaylistDetailsContainerProps extends WithApiProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class PlaylistDetailsContainer extends Component<
  PlaylistDetailsContainerProps
> {
  state = {
    playlistDetails: null
  };

  async componentDidMount() {
    const { api, navigation } = this.props;
    const playlistId = navigation.getParam('playlistId');
    const playlistDetails = await api.getPlaylistDetails(playlistId);
    this.setState({ playlistDetails });
  }

  render() {
    const { playlistDetails } = this.state;
    if (playlistDetails === null) {
      return null;
    }
    // @ts-ignore
    return <PlaylistDetails playlistDetails={playlistDetails} />;
  }
}

export default withApi(PlaylistDetailsContainer);
