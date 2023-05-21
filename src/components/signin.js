import React, { useState } from 'react'
import logo from '../images/rectangle.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

    const[inpval,setInpval] = useState({
        email:"",
        password:""
    })

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e)=>{
        // console.log(e.target.value);
        const {value, name} = e.target;
        // console.log(value,name);
        
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuser =  localStorage.getItem("userinput");
        console.log(getuser);
        // console.log(inpval);
        const {email,password} = inpval;

        if(email === "") {
            alert("email field is requred")
        } else if(!email.includes("@")) {
            alert("please enter valid email address")
        } else if(password === "") {
            alert("password field is requred")
        } else if(password.length < 6) {
            alert("password length must be greater than six character")
        } else {
            if(getuser && getuser.length){
                const userdata = JSON.parse(getuser);
                const userlogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });
                if(userlogin.length === 0){
                    alert("Invalid details")
                } else{
                    console.log("user login succesfully");
                }
            }
        }
    }

    return (
        <>
          <div className='container'>
            <section className='d-flex justify-content-center'>
              <div className="left_data" style={{width:"45%", display: "flex", justifyContent: "center", flexDirection: "column", paddingLeft:"2vh"}}>
                <img src={logo} style={{width:"15%"}} className="signup-logo" alt="logo" />
                <h3 className='text-start mt-4 col-lg-6'>Welcome Back!</h3>
      
                <Form>
                  <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' onChange={getdata} placeholder="Contoh: johndee@gmail.com" />
                  </Form.Group>
      
                  <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={getdata} placeholder="6+ karakter" />
                  </Form.Group>
      
                  <Button variant="primary" className='col-lg-8 mt-3' onClick={addData} style={{background:"rgb(13,40,166)"}} type="submit">
                    Sign In
                  </Button>
                </Form>
                <p className='mt-3'>Don't have an account? <span><NavLink to="/signup">Sign Up for free</NavLink></span></p>
              </div>
              <div className="right_data" style={{width:"45%"}}>
                  <img src="./sign_img.png" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="" />
              </div>
            </section>
          </div>
        </>
      )      
}

export default SignIn