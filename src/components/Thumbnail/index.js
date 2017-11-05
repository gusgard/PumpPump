import React, { PureComponent } from 'react'
import { Image, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { colors } from '@themes'
import { placeholderUser } from '@images'

import styles from './styles'

export default class Thumbnail extends PureComponent {
  static defaultProps = {
    source: placeholderUser,
    size: 100
  }
  static propTypes = {
    ...Image.propTypes,
    size: PropTypes.number.isRequired
  }

  componentWillMount() {
    this.updateState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps)
  }

  updateState() {
    const loading = false
    this.setState({ loading })
  }

  render() {
    const { source, size } = this.props
    const imageProps = {
      source,
      resizeMode: Image.resizeMode.cover,
      style: styles.image({ size }),
      onLoadStart: () => this.setState({ loading: true }),
      onLoadEnd: () => this.setState({ loading: false })
    }
    // If the URL is empty show placeholder
    if (!source.uri) {
      imageProps.source = placeholderUser
    }
    const activityIndicatorProps = {
      style: {
        position: 'absolute',
        height: size,
        width: size
      },
      color: colors.black
    }
    return (
      <View>
        <Image {...imageProps} />
        {this.state.loading && <ActivityIndicator {...activityIndicatorProps} />}
      </View>
    )
  }
}
