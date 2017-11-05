import { shallow } from 'enzyme'
import React from 'react'

import Description from './'

const bio = [
  {
    value: 'Motivation to become the best version of you!  💙💪🌎. It\'s',
    highlighted: false,
  },
  {
    value: ' #HealthyHolidays',
    highlighted: true,
  },
]

it('renders correctly', () => {
  const wrapper = shallow(<Description bio={bio} />)
  expect(wrapper).toMatchSnapshot()
})

it('renders Description without Read more text', () => {
  const wrapper = shallow(<Description bio={bio} />, {})
  wrapper.simulate('press')
  expect(wrapper).toMatchSnapshot()
})
