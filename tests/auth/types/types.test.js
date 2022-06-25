import { types } from "../../../src/auth";

describe('Test on "Types.js"', () => {
  test('Should match types to expected object', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });
  });
});
