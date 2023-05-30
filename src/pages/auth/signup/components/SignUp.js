import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../../assets/images/rectangle.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { register } from "../../../../features/registerSlice";

const SignUp = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validasi password
    if (form.password.length < 6) {
      setIsSubmitting(false);
      toast.error("Password must be at least 6 characters long", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = dispatch(register(form));
      setIsSubmitting(false);

      if (response.error) {
        toast.error(response.payload.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("An error occurred during registration", {
        position: "top-center",
      });
    }
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

            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
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

              <Button
                variant="primary"
                className="col-lg-9 mt-3"
                style={{ background: "rgb(13,40,166)" }}
                type="submit"
              >
                {isSubmitting ? "Loading..." : "SignUp"}
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account?{" "}
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
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default SignUp;
