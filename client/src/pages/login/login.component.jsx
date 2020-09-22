import React from 'react';
import './login.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Login = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
