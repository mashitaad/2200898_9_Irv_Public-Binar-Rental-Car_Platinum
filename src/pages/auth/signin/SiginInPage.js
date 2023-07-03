import React, { useState } from 'react';
import SignIn from './components/SignIn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../features/authSlice';
import { useCookies } from 'react-cookie';

const SiginInPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['token']);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (payload) => {
    try {
      const result = await dispatch(login(payload)).unwrap();

      setCookie('token', result.access_token, { path: '/' });
    } catch (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate('/');
  };

  return (
    <>
      <SignIn onSubmit={submit} message={errorMessage} />
    </>
  );
};

export default SiginInPage;
