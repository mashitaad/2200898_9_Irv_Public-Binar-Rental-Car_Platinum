import React, { useState } from 'react'
import logo from '../../../../assets/images/rectangle.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    // const history = useNavigate();

    const[inpval,setInpval] = useState({
        name:"",
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

        // console.log(inpval);
        const {name,email,password} = inpval;

        if (name === "") {
            alert("name field is requred")
        } else if(email === "") {
            alert("email field is requred")
        } else if(!email.includes("@")) {
            alert("please enter valid email address")
        } else if(password === "") {
            alert("password field is requred")
        } else if(password.length < 6) {
            alert("password length must be greater than six character")
        } else {
            console.log("data added succesfully");
            localStorage.setItem("userinput",JSON.stringify([...data,inpval]));
        }
    //         toast.error('name field is requred!',{
    //             position: "top-center",
    //         });
    //     } else if (email === "") {
    //          toast.error('email field is requred',{
    //             position: "top-center",
    //         });
    //     } else if (!email.includes("@")) {
    //          toast.error('plz enter valid email addres',{
    //             position: "top-center",
    //         });
    //     } else if (password === "") {
    //          toast.error('password field is requred',{
    //             position: "top-center",
    //         });
    //     } else if (password.length < 6) {
    //          toast.error('password length greater six',{
    //             position: "top-center",
    //         });
    //     } else {
    //         console.log("data added succesfully");
    //         history("/login")
    //         localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        // }

    }
  
    return (
    <>
        <div className='container'>
            <section className='d-flex justify-content-between'>
                <div className="left_data" style={{width:"45%", display: "flex", justifyContent: "center", flexDirection: "column", paddingLeft:"16vh"}}>
                    <img src={logo} style={{width:"15%"}} className="signup-logo" alt="logo" />
                    <h3 className='text-start mt-4 col-lg-6'>Sign Up</h3>

                    <Form>
                    <Form.Group className="mb-3 col-lg-9" controlId="formBasicText">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="text" name='name' onChange={getdata} placeholder="Nama Lengkap" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-9" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Contoh: johndee@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-9" controlId="formBasicPassword">
                        <Form.Label>Create Password*</Form.Label>
                        <Form.Control type="password" name='password' onChange={getdata} placeholder="6+ karakter" />
                    </Form.Group>

                    <Button variant="primary" className='col-lg-9 mt-3' onClick={addData} style={{background:"rgb(13,40,166)"}} type="submit">
                        SignUp
                    </Button>
                    </Form>
                    <p className='mt-3'>Already have an account? <span><NavLink to="/signin">Sign In here</NavLink></span></p>

                </div>
                <div className="right_data" style={{width:"45%"}}>
                        <img src="./sign_img.png" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="" />
                </div>
            </section>
            <ToastContainer />
        </div>
    </>
  )
}

export default SignUp;