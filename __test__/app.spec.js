import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

// import configureStore from 'redux-mock-store';
import App from '../src/App';
/*
const mockStore = configureStore();
const initialState = [
  user: {
    username: 'usertest',
    email: 'usertest@gmail.com.br'
  }
] */
describe('Teste do componente Header', () => {
  it('renderizar corretamente', () => {
    const wrapper = shallow(<App />);
    // const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
