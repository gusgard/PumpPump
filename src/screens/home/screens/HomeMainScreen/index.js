import React, { PureComponent } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridList from 'react-native-grid-list';
import SwiperFlatList from 'react-native-swiper-flatlist';

import * as actions from './actions';
import styles from './styles';
import { getUserState, getPopularPostState } from './selectors';
import { UserProfile } from './components';

class HomeMainScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    popular: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchPhotosGrid: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { fetchUser, fetchPhotosGrid } = this.props;
    const userId = 1234;
    fetchUser(userId);
    fetchPhotosGrid();
  }

  renderItemSwiper = ({ item }) => (
    <Image style={styles.imageSwiper} source={item.thumbnail} />
  );

  renderItemGrid = ({ item, animation }) => (
    <Image
      style={styles.imageGrid}
      source={item.thumbnail}
      onLoad={() => animation && animation.start()}
    />
  );

  render() {
    const { user, popular } = this.props;
    return (
      <View style={styles.container}>
        <UserProfile
          name={user.name}
          description={user.description}
          picture={user.thumbnail}
        />
        <ScrollView>
          <SwiperFlatList
            autoplay
            showPagination
            data={user.photos}
            autoplayDelay={3}
            renderItem={this.renderItemSwiper}
          />
          <GridList
            showAnimation
            showSeparator
            separatorBorderWidth={5}
            data={popular}
            numColumns={3}
            renderItem={this.renderItemGrid}
          />
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  state => ({
    user: getUserState(state),
    popular: getPopularPostState(state),
  }),
  dispatch => ({
    fetchUser: id => dispatch(actions.fetchUser(id)),
    fetchPhotosGrid: () => dispatch(actions.fetchPhotosGrid()),
  }),
)(HomeMainScreen);
