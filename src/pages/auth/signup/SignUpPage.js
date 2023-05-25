import React from 'react'
import SignUp from './components/SignUp';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SignUpPage = () => {

  const navigate = useNavigate()

  const registerCustomer = async (payload) => {
    try {
      const url = 'https://bootcamp-rent-cars.herokuapp.com/customer/auth/register';

      const response = await axios.post(url, payload);
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
  // todo fecth api auth
  // /customer/auth/register

    registerCustomer(payload);
    console.log(payload)

  }


  return (
    <SignUp onSubmit={handleSignUp} />
  )
}



export default SignUpPage;
