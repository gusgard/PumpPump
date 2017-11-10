import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const MAX_LINES = 4;

export default class Description extends PureComponent {
  static propTypes = {
    texts: PropTypes.array.isRequired,
  };

  state = {
    readMore: true,
  };

  toggleReadMore = () => {
    this.setState({ readMore: !this.state.readMore });
  };

  render() {
    const { texts } = this.props;
    const { readMore } = this.state;
    return (
      <TouchableOpacity onPress={this.toggleReadMore}>
        <Text numberOfLines={readMore ? MAX_LINES : 0} style={styles.texts}>
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
      </TouchableOpacity>
    );
  }
}
