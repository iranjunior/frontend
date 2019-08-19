import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/Components/Header';

const initialState = {
  user: {
    username: 'iranjunior94',
    email: 'iranjunior94@gmail.com',
  },
};
describe('Testando redux no Header', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Header {...initialState} />);

    expect(wrapper).toMatchSnapshot();
  });
});
