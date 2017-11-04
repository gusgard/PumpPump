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

  _renderItem = ({ item, index }) => {
    const { numberOfColumns } = this.props;
    const position = index % numberOfColumns;
    let style = styles.imageCenter;
    if (position === 0) {
      style = styles.imageRight;
    } else if (position === numberOfColumns - 1) {
      style = styles.imageLeft;
    }
    return (
      <View style={style}>
        <Image
          style={[styles.image, this.itemDimension]}
          source={item.thumbnail}
          resizeMethod="resize"
        />
      </View>
    );
  };

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
