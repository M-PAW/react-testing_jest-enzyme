import CheckPropTypes from 'check-prop-types';
import { checkPropTypes } from 'prop-types';

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