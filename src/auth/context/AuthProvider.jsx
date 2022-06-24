import { useReducer } from "react";
import { types } from "../types";
import { AuthContext, authReducer } from "./";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState);

  /**
   * Set user to context
   * @param {string} name
   * @returns {void|undefined}
   */
  const login = (name) => {

    if (!name) return;

    const action = {
      type: types.login,
      payload: {
        id: '8gpR&sP6%g@3/4Y9',
        name
      }
    };

    dispatch(action);

  };

  const logout = () => {
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};
