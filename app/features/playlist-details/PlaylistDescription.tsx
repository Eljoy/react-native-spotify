import React, { PureComponent } from 'react';
import { Dimensions, Image } from 'react-native';
import { Spotify, Block, PrimaryText, SecondaryText, Title } from '../../core';

interface PlaylistDescriptionProps {
  playlistDetails: Spotify.PlaylistDetails;
}

class PlaylistDescription extends PureComponent<PlaylistDescriptionProps> {
  render() {
    const { playlistDetails } = this.props;

    const { url } = playlistDetails.images[0];
    const window = Dimensions.get('window');
    const imageSize = Math.floor(window.width / 3);

    const { name, description, owner, followers } = playlistDetails;
    const totalFollowers = (followers.total / 1000000).toFixed(1);

    return (
      <Block layout="row" paddingScale={3}>
        <Block>
          <Image
            source={{ uri: url }}
            style={{ width: imageSize, height: imageSize }}
          />
        </Block>
        <Block paddingHorizontalScale={2}>
          <Block>
            <Title>{name}</Title>
            <SecondaryText>Playlist by {owner.displayName}</SecondaryText>
          </Block>
          <Block marginVerticalScale={2}>
            <PrimaryText>{description}</PrimaryText>
            <SecondaryText>{totalFollowers}M followers</SecondaryText>
          </Block>
        </Block>
      </Block>
    );
  }
}

export default PlaylistDescription;
