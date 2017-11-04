import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image } from 'react-native';

import { width } from '@themes';

import styles from './styles';

const calcGridDimension = numberOfColumns => ({
  height: width / numberOfColumns,
  width: width / numberOfColumns,
});

export default class ListGrid extends PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
    numberOfColumns: PropTypes.number.isRequired,
  };

  static defaultProps = {
    numberOfColumns: 3,
  };

  state = {
    index: 0,
  };

  itemDimension = calcGridDimension(this.props.numberOfColumns);

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => (
    <Image
      style={[styles.image, this.itemDimension]}
      source={item.thumbnail}
      resizeMethod="resize"
    />
  );

  render() {
    const { items, numberOfColumns } = this.props;
    return (
      <FlatList
        numColumns={numberOfColumns}
        data={items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
