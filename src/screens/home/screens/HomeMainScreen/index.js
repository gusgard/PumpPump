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
    slider: PropTypes.object.isRequired,
    grid: PropTypes.object.isRequired,
  };

  componentDidCatch(error, info) {
    console.log(error, info, this);
    // this.setState({ hasError: true });
  }

  render() {
    const { user, slider, grid } = this.props;
    console.log(user, slider, grid);
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
    slider: state[NAME].slider,
    grid: state[NAME].grid,
  }),
  dispatch => ({
    fetchUser: () => dispatch(actions.fetchUser()),
    fetchPhotosSlider: () => dispatch(actions.fetchPhotosSlider()),
    fetchPhotosGrid: () => dispatch(actions.fetchPhotosGrid()),
  }),
)(HomeMainScreen);
