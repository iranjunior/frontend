import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Header from '../../src/Components/Header';

const middleware = [thunk];
const mockStore = configureStore(middleware);

const initialState = {
  user: {
    username: 'iranjunior94',
    email: 'iranjunior94@gmail.com',
  },
};
const store = mockStore(initialState);
describe('Testando redux no Header', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Header />, { context: { store } }).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
