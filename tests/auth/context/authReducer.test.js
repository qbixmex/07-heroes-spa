import { authReducer, types } from "../../../src/auth";

describe('Test on AuthReducer', () => {

  const initialState = { logged: false };

  test('Should return initial state', () => {
    const state = authReducer(initialState, {});
    expect(state).toBe(initialState);
  });

  test('Should call login to authenticate and set user', () => {
    const action = {
      type: types.login,
      payload: {
        id: '8gpR&sP6%g@3/4Y9',
        name: 'Peter Parker'
      }
    };
    const newState = authReducer(initialState, action);
    expect( newState ).toEqual({
      logged: true,
      user: action.payload
    });
  });

  test('Should call logout to delete user and set logged in false', () => {
    const state = {
        logged: true,
        user: {
          id: '5gYR@sO4%v#2^3uX',
          name: 'Steve Rogers'
        }
    };
    const action = { type: types.logout };
    const newState = authReducer(state, action);
    expect( newState ).toEqual({ logged: false });
  });
});
