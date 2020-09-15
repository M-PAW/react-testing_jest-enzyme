
import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
    // Must pass in an empty action or you will receive an Cannot Read Type error.
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of true upon receiving an action type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});
