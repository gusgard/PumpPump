import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Slider, ListGrid } from '@components';

import * as actions from './actions';
import styles from './styles';
import { getUserState, getPopularPhotosState } from './selectors';
import { UserProfile } from './components';

class HomeMainScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    popularPhotos: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchPhotosGrid: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { fetchUser, fetchPhotosGrid } = this.props;
    const userId = 1234;
    fetchUser(userId);
    fetchPhotosGrid();
  }

  render() {
    const { user, popularPhotos } = this.props;
    return (
      <View style={styles.container}>
        <UserProfile
          name={user.name}
          description={user.description}
          picture={user.thumbnail}
        />
        <ScrollView>
          <Slider items={user.photos} />
          <ListGrid items={popularPhotos} />
        </ScrollView>
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
    fetchUser: id => dispatch(actions.fetchUser(id)),
    fetchPhotosGrid: () => dispatch(actions.fetchPhotosGrid()),
  }),
)(HomeMainScreen);
