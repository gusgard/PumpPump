import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image } from 'react-native';

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

  // TODO: left border
  _renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        style={[styles.image, this.itemDimension]}
        source={item.thumbnail}
        resizeMethod="resize"
      />
    </View>
  );

  render() {
    const { items, numberOfColumns } = this.props;
    return (
      <FlatList
        numColumns={numberOfColumns}
        data={items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}
