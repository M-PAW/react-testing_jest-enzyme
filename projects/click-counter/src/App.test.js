import React from 'react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()})

// Use a data-test attribut to make sure it doesn't
// render a blank component.
test('renders without an error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders component button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});


