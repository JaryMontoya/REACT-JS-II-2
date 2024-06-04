import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const credentials = {
      username: 'user',
      password: 'password',
    };
    dispatch(login(credentials));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
