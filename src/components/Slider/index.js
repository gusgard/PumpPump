import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, FlatList, Image } from 'react-native';

// import { width } from '@themes';
// import { logo } from '@images';

import styles from './styles';

export default class Slider extends PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    index: 0,
  };

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => (
    <Image style={styles.image} source={item.thumbnail} resizeMethod="resize" />
  );

  goTo = index => {
    // console.log(this._flatListRef);
    const params = { animated: true, index };
    this._flatListRef.scrollToIndex(params);
  };

  _onViewableItemsChanged = ({ viewableItems }) => {
    const [item] = viewableItems;
    console.log(item);
    if (item) {
      this.setState({ index: item.index });
    }
  };
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.slider}
          ref={component => {
            this._flatListRef = component;
          }}
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={this._onViewableItemsChanged}
          // ListFooterComponent={() => <Text>{'item.id'}</Text>}
          // scrollEventThrottle={16}
          // removeClippedSubviews
        />
        <View style={styles.dotsContainer}>
          {items.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.dot,
                this.state.index === index && styles.dotActive,
              ]}
              key={item.id}
              onPress={() => this.goTo(index)}
            />
          ))}
        </View>
      </View>
    );
  }
}
