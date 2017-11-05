import { shallow } from 'enzyme';
import React from 'react';

import Description from './';

const bio = [];

it('renders correctly', () => {
  const wrapper = shallow(<Description bio={bio} />);
  expect(wrapper).toMatchSnapshot();
});
