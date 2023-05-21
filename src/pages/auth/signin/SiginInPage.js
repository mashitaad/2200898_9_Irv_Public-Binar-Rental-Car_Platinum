import React from 'react'
import jwtDecode from "jwt-decode";
import SignIn from './components/SignIn';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../../../features/authSlice';


const SiginInPage = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate()
  const submit = async (payload) => {

    try {
      const result = await dispacth(login(payload)).unwrap();
      const user = jwtDecode(result.access_token)
      localStorage.setItem('token', result.access_token)

    } catch (error) {

      // todo get error message
       
      console.log(error.message)      
      return
    }
    navigate('/')
  }

  return (
    <>
    <SignIn onSubmit={submit} />
    </>
  )
}

export default SiginInPage;