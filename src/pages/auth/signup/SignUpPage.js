import React, { useState } from 'react';
import SignUp from './components/SignUp';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login, register } from '../../../features/authSlice';
import { useCookies } from 'react-cookie';
import { Helmet } from 'react-helmet-async';

const SignUpPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (payload) => {
    if (payload.password.length < 6) {
      setErrorMessage('password harus lebih dari 6 karakter');
      return;
    }
    if (payload.password !== payload.confirmPassword) {
      setErrorMessage('password dan confirm password tidak sama');
      return;
    }

    try {
      await dispatch(register(payload)).unwrap();

      const result = await dispatch(
        login({ email: payload.email, password: payload.password })
      ).unwrap();

      setCookie('token', result.access_token, { path: '/' });

      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Make an account to rent our car" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <SignUp onSubmit={handleSignUp} errorMessage={errorMessage} />
    </>
  );
};

export default SignUpPage;
