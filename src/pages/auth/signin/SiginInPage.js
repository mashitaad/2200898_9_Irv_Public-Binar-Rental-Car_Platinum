import React from 'react'
import SignIn from './components/SignIn';



const SiginInPage = () => {




  const submit = (payload) => {
    console.log(payload)
  }

  return (
    <>
    <SignIn onSubmit={submit} />
    </>
  )
}



export default SiginInPage;