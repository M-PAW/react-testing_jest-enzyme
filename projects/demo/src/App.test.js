import React from 'react';
import App from './App';

// Required Imports for Enzyme
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Configure Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// This is the name of the test that
// shows if it fails
test('renders without crashing', () => {
    // using a shallow wrapper, only going one component deep for testing.
    const wrapper = shallow(<App />);

    // Change the component into a string and console.log it for debugging.
    // console.log(wrapper.debug());

    // expect(<App />).toBeTruthy();
});
