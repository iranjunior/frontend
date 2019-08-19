import React from 'react';
import { shallow } from 'enzyme';
import store from '../src/Store';
import configureStore from 'redux-mock-store';
import Header from '../src/Components/Header';
import { middlewares } from '../src/Store';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({ middlewares });

initialState = {};

const store = mockStore(initialState);

describe('Testando redux no Header', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Header />, { context: { store } }).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
