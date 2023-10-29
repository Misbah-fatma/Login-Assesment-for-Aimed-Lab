import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'


const Login = () => {

  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(res => {
        console.log("login: " + res.data);
        if(res.data === "Success") {
           {
                navigate('/')
            }
        }
    }).catch(err => console.log(err))
}
  return (
    <>

     
          <div className="register-photo">
        <div className="form-container">
            <div className="image-holder">
            
            </div>

          <form onSubmit={handleSubmit} method="post">
          <h2 className="text-center" ><b>Login</b></h2>
              <div class="my-3">
                <label className='label'>Login ID</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Login ID"
                  onChange = { (e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
              <div className='input-container'>
                <label className='label'>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange = { (e) => setpassword(e.target.value)}

                />
                <FontAwesomeIcon icon={faEye} className="input-icon" />
                </div>
              </div>

 
           
              <div className="form-group">
                    <div className="form-check"><label className="form-check-label">
                      <input className="form-check-input" type="checkbox" />
                      Remember Me <span className="text-end" style={{color : 'orange' }} >                                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         Change Password </span></label>
                         <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        Agree to <a href="/" style={{color : 'orange' }}>Terms and Conditions
                        </a></label>
                         </div>
                </div>
                
           
                <div className="text-center">
                <button class="my-2 mx-auto btn btn-primary" type="submit" >
                <b> Login </b> 
                </button>
              </div>
              <div className="my-3" style={{textAlign: "center"}}>
                <p>Don't have a Account? <Link to="/register" className="text-decoration-none text-info" >
                  <span style={{color : 'orange' }}>
                    Register Here.</span></Link> </p>
              </div>
             
            </form>
          </div>
        </div>
    
      
 
    </>
  );
};

export default Login;
