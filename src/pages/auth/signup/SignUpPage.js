import React from 'react'
import SignUp from './components/SignUp';
import { useNavigate } from 'react-router';
import axios from 'axios';

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
      console.error(error);
      // Handle error appropriately
    }
  };

  const handleSignUp = (payload) => {
    console.log(payload)
    registerCustomer(payload)
  // todo fecth api auth
  // /customer/auth/register
  // if success page login
  }


  return (
   <SignUp onSubmit = {handleSignUp}/>
  )
}



export default SignUpPage;
