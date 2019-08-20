import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Header from '../src/Components/Header';

const mockStore = configureStore();

const initialState = {
  uiDesign: {
    header: {},
  },
};
let store;
let wrapper;

describe('Testando redux no Header', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Header store={store} />).dive();
  });
  it('deve renderizar corretamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Deve ter apenas um header', () => {
    expect(wrapper.length).toBe(1);
  });
});
