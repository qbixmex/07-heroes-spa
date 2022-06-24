import { useContext } from "react";
import { AuthContext } from "../../auth";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext );

  const handleLogin = () => {
    login('John Doe');
    navigate('/marvel', { replace: true });
  };
  
  return (
    <div className="container py-4">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  );
};
