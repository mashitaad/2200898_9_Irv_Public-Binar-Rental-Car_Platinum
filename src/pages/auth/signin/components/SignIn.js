import React, { useState } from 'react'
import logo from '../../../../assets/images/rectangle.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

const SignIn = (props) => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })


  return (
    <>
      <div className='container'>
        <section className='d-flex justify-content-center'>
          <div className="left_data" style={{ width: "45%", display: "flex", justifyContent: "center", flexDirection: "column", paddingLeft: "2vh" }}>
            <img src={logo} style={{ width: "15%" }} className="signup-logo" alt="logo" />
            <h3 className='text-start mt-4 col-lg-6'>Welcome Back!</h3>

            <Form onSubmit={(e => {
              e.preventDefault()
              props.onSubmit(form)
            })}>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name='email'
                  onChange={e => setForm({
                    ...form, ...{ email: e.target.value }
                  })}
                  placeholder="Contoh: johndee@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  onChange={e => setForm({
                    ...form, ...{ password: e.target.value }
                  })}
                  placeholder="6+ karakter" />
              </Form.Group>

              <Button variant="primary" className='col-lg-8 mt-3'  style={{ background: "rgb(13,40,166)" }} type="submit">
                Sign In
              </Button>
            </Form>
            <p className='mt-3'>Don't have an account? <span>
              <NavLink to="/signup">Sign Up for free</NavLink>
            </span></p>
          </div>
          <div className="right_data" style={{ width: "45%" }}>
            <img src="./sign_img.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
        </section>
      </div>
    </>
  )
}

export default SignIn


SignIn.defaultProps = {
  onSubmit: () => {}
}