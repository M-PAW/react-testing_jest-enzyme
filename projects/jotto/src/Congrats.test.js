import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Congrats {...props} />)
    if ( state ) wrapper.setState(state)
    return wrapper;
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

test('renders congrats without an error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-congrats");
    expect(appComponent.length).toBe(1);
})