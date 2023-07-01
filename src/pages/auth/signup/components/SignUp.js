import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../../assets/images/rectangle.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "Customer",
  });

  return (
    <>
      <div className="container">
        <section className="d-flex" >
          <div
            className="left_data"
            style={{
              flex: "0 0 50%",
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
              <Form.Group
                className="mb-3 col-lg-9"
                controlId="formBasicEmail"
              >
                {props.errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {props.errorMessage}
                  </div>
                )}
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-9"
                controlId="formBasicPassword"
              >
                <Form.Label>Create Password*</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                  placeholder="6+ karakter"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-9"
                controlId="formBasicPassword"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="6+ karakter"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-9 mt-3"
                style={{ background: "rgb(13,40,166)" }}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account?{" "}
              <span>
                <NavLink to="/signin">Sign In here</NavLink>
              </span>
            </p>
          </div>
          <div
            className="right_data"
            style={{
              flex: "0 0 100%",
              backgroundColor: "#0D28A6",
              height: "100vh",
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                width: "429px",
                height: "72px",
                left: "115px",
                top: "90px",
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "48px",
                lineHeight: "150%",
                color: "#D9D9D9",
              }}
            >
              Binar rental car
            </p>
            <img
              src="./sign_img.png"
              alt=""
              style={{
                position: "absolute",
                left: "115px",
                top: "200px",
                width: "calc(100% - 115px)",
                height: "calc(100vh - 200px)",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
