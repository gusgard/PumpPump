import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const MAX_LINES = 3

export default class Description extends PureComponent {
  static propTypes = {
    bio: PropTypes.array.isRequired
  }

  state = {
    readMore: true
  }

  toggleBioText = () => {
    this.setState({ readMore: !this.state.readMore })
  }

  render() {
    const { bio } = this.props
    const { readMore } = this.state
    return (
      <TouchableOpacity onPress={this.toggleBioText}>
        <Text numberOfLines={readMore ? MAX_LINES : 0} style={styles.bio} ellipsizeMode="middle">
          {bio.map(
            (text, index) =>
              text.highlighted ? (
                <Text key={index} style={styles.highlighted}>
                  {text.value}
                </Text>
              ) : (
                <Text key={index}>{text.value}</Text>
              )
          )}
          {readMore && <Text style={styles.readMore}> ...read more</Text>}
        </Text>
      </TouchableOpacity>
    )
  }
}
