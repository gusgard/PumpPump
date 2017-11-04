import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Slider, ListGrid } from '@components';

import * as actions from './actions';
import styles from './styles';
import { getUserState, getPopularPhotosState } from './selectors';

class HomeMainScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    popularPhotos: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchPhotosGrid: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { fetchUser, fetchPhotosGrid } = this.props;
    fetchUser();
    fetchPhotosGrid();
  }

  componentDidCatch(error, info) {
    console.log(error, info, this);
    // this.setState({ hasError: true });
  }

  render() {
    const { user, popularPhotos } = this.props;
    return (
      <View style={styles.container}>
        <Slider items={user.photos} />
        <ListGrid items={popularPhotos} />
      </View>
    );
  }
}

export default connect(
  state => ({
    user: getUserState(state),
    popularPhotos: getPopularPhotosState(state),
  }),
  dispatch => ({
    fetchUser: () => dispatch(actions.fetchUser()),
    fetchPhotosGrid: () => dispatch(actions.fetchPhotosGrid()),
  }),
)(HomeMainScreen);
