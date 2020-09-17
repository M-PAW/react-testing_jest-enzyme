import CheckPropTypes from 'check-prop-types';
import { checkPropTypes } from 'prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares, middleWares } from '../src/configureStore';

/**
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} var - Value of data-test attribute for search. 
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = CheckPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}