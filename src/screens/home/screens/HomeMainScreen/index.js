import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './actions';
import styles from './styles';
import { NAME } from '../../constants';

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
    console.log(user, popularPhotos);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    user: state[NAME].user,
    popularPhotos: state[NAME].popularPhotos,
  }),
  dispatch => ({
    fetchUser: () => dispatch(actions.fetchUser()),
    fetchPhotosGrid: () => dispatch(actions.fetchPhotosGrid()),
  }),
)(HomeMainScreen);
