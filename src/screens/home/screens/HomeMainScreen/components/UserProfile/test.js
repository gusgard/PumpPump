import { shallow } from 'enzyme';
import React from 'react';

import UserProfile from './';

const user = {
  description: [],
  name: '',
  thumbnail: {},
};

it('renders correctly', () => {
  const wrapper = shallow(
    <UserProfile
      name={user.name}
      description={user.description}
      picture={user.thumbnail}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
