import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Thumbnail } from '@components';

import styles from './styles';

export default class UserBio extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.array.isRequired,
    picture: PropTypes.object.isRequired,
  };

  render() {
    const { name, bio, picture } = this.props;
    return (
      <View style={styles.container}>
        <Thumbnail source={picture} />
        <View style={styles.texts}>
          {/* TOP */}
          <Text style={styles.name}>{name}</Text>
          {/* BOTTOM */}
          <Text numberOfLines={3} style={styles.bio}>
            {bio.map(
              (text, index) =>
                text.highlighted ? (
                  <Text key={index} style={styles.highlighted}>
                    {text.value}
                  </Text>
                ) : (
                  <Text key={index}>{text.value}</Text>
                ),
            )}
          </Text>
        </View>
      </View>
    );
  }
}
