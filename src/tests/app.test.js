import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../components/app';

describe('<App/>', () => {
  it('should render without crashing', () => {
    global.fetch = jest.fn();
    const wrapper = shallow(
    <App />);
  });
});