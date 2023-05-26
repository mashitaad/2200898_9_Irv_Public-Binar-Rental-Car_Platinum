import React from 'react'
import SignUp from './components/SignUp';
import axios from 'axios';
import config from '../../../config';
import { useNavigate } from 'react-router';

const SignUpPage = () => {

  const navigate = useNavigate()

  const baseUrl = config.apiBaseUrl

  const registerCustomer = async (payload) => {
    try {
      const response = await axios.post(baseUrl + '/customer/auth/register', payload);

      console.log(response.data); // You can handle the response data here
      navigate('/signin')
      // Additional logic after successful registration
    } catch (error) {
      console.log(error.response.data);
      // Handle error appropriately
    }
  };

  // registerCustomer();

  const handleSignUp = (payload) => {
    registerCustomer(payload)
  }


  return (
    <SignUp onSubmit={handleSignUp} />
  )
}



export default SignUpPage;
