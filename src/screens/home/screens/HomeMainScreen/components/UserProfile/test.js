import { shallow } from 'enzyme'
import React from 'react'

import UserProfile from './'

const user = {
  bio: [],
  name: '',
  thumbnail: {},
}

it('renders correctly', () => {
  const wrapper = shallow(
    <UserProfile name={user.name} bio={user.bio} picture={user.thumbnail} />,
  )
  expect(wrapper).toMatchSnapshot()
})
