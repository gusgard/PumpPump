import { shallow } from 'enzyme';
import React from 'react';

import Description from './';

const description = [
  {
    value: 'Motivation to become the best version of you!',
    highlighted: false,
  },
  {
    value: '#Whitebear',
    highlighted: true,
  },
];

it('renders correctly', () => {
  const wrapper = shallow(<Description texts={description} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders Description without Read more text', () => {
  const wrapper = shallow(<Description texts={description} />, {});
  wrapper.simulate('press');
  expect(wrapper).toMatchSnapshot();
});
