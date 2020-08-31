import React from 'react';
import App from './App';

// Required Imports for Enzyme
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Configure Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// This is the name of the test that
// shows if it fails
test('renders learn react link', () => {

});
