import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Thumbnail } from '@components';
import Description from '../Description';

import styles from './styles';

export default class UserProfile extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    picture: PropTypes.object.isRequired,
  };

  render() {
    const { name, description, picture } = this.props;
    return (
      <View style={styles.container}>
        <Thumbnail source={picture} />
        <View style={styles.texts}>
          {/* NAME */}
          <Text style={styles.name}>{name}</Text>
          {/* DESCRIPTION */}
          <Description texts={description} />
        </View>
      </View>
    );
  }
}
