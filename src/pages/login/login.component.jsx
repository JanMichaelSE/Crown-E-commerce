import React from 'react';
import './login.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const Login = () => {
  return (
    <div className="login">
      <div className="login__signin-container">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
