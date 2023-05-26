import React, { useState } from "react";
import logo from "../../../../assets/images/rectangle.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignUp = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitClick = () => {
    setErrorMessage(validate(form));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (!values.email) {
      errors.email = " Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = " Enter a valid email address";
    }

    if (!values.password) {
      errors.password = " Password is required";
    } else if (values.password.length < 6) {
      errors.password = " Password should contain 6 characters or more";
    }
    return errors;
  };

  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-between">
          <div
            className="left_data"
            style={{
              width: "45%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "16vh",
            }}
          >
            <img
              src={logo}
              style={{ width: "15%" }}
              className="signup-logo"
              alt="logo"
            />
            <h3 className="text-start mt-4 col-lg-6">Sign Up</h3>

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit(form);
              }}
            >
              <Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label> 
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Contoh: johndee@gmail.com"
                />
                {errorMessage.email ?? 
                    <span>{errorMessage.email}</span>
                } 
              </Form.Group>
              

              <Form.Group
                className="mb-3 col-lg-9"
                controlId="formBasicPassword"
              >
                <Form.Label>Create Password*</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="6+ karakter"
                />
                {errorMessage.password ?? 
                    <span>{errorMessage.password}</span>
                } 
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-9 mt-3"
                onClick={submitClick}
                style={{ background: "rgb(13,40,166)" }}
                type="submit"
              >
                SignUp
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account?
              <span>
                <NavLink to="/signin">Sign In here</NavLink>
              </span>
            </p>
          </div>
          <div className="right_data" style={{ width: "45%" }}>
            <img
              src="./sign_img.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;

SignUp.defaultProps = {
  onSubmit: () => {},
};
