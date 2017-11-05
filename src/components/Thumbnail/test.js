import { shallow } from 'enzyme'
import React from 'react'

import { Thumbnail } from '@components'

it('renders correctly', () => {
  const wrapper = shallow(<Thumbnail />)
  expect(wrapper).toMatchSnapshot()
})
