import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const MAX_LINES = 4;

export default class Description extends PureComponent {
  static propTypes = {
    texts: PropTypes.array.isRequired,
  };

  render() {
    const { texts } = this.props;
    return (
      <Text numberOfLines={MAX_LINES} style={styles.texts}>
        {texts.map(
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
    );
  }
}
