import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './store';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const store = configureStore();
  mount(<Provider store={store}><App /></Provider>);

});
