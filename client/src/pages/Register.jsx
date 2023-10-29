import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/register' , {name, email, password})
        .then(result => {
             console.log(result)
             navigate('/')
        })
        .catch(err => console.log(err))
    } 
    return (
        <>
   
   <div className="register-photo">
        <div className="form-container">
   
            <div className="holder" >
          
            </div>
             
                    <form onSubmit={handleSubmit}>
                    <h2 className="text-center" ><b>Register</b></h2>
                            <div className="my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    onChange = { (e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                            <label for="Name">Phone Number</label>
                            <div className="beside">
                            <div className="l">
                            <input type="number" placeholder="PHONE NUMBER"  className="form-control"/>
                            </div>
                <select >
                    <option>GENDER</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>NON-BINARY</option>
                </select>
            </div></div>
                            <div className="my-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange = { (e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    onChange = { (e) => setpassword(e.target.value)}
                                />
                            </div>
                           
                            <div className="text-center">
                <button class="my-2 mx-auto btn btn-primary" type="submit" >
                <b> Register </b> 
                </button>
              </div>
              <div className="my-3" style={{textAlign: "center"}}>
                                <p>Already has an account? <Link to="/login" className="text-decoration-none"> <span style={{color : 'orange' }}>Login</span></Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
          

        </>
    )
}

export default Register