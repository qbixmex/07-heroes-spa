import { useReducer } from "react";
import { types } from "../types";
import { AuthContext, authReducer } from "./";

const initializer = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return { logged: !!user, user };
};

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, initializer);

  const login = ( name ) => {

    if (!name) return;

    const user = { id: '8gpR&sP6%g@3/4Y9', name }

    const action = {
      type: types.login,
      payload: user
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);

  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};
