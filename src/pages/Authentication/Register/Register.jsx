import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../accests/images/googlr.png';
import facebook from '../../../accests/images/facebook.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../Config/Firebase';

const initialState = {
  name: '',
  email:'',
  password:''
}

export default function Register() {

const [state , setState] = useState(initialState)
const [isProcessing, setIsProcesssing] = useState(false)

  const handleChange = (e) => {
     setState(s=>({...s,[e.target.name]:e.target.value}))
  }

  const handleSubmit = (e) => {
   e.preventDefault()
   console.log(state)
   let {name,email, password} = state
   name = name.trim()
   email= email.trim()
   password= password.trim() 

   if(name.length<3){
    return window.notify('Please Enter Name Correctly', 'error')
   }
   if(!email){
    return window.notify('Enter Email', 'error')
   }
   if(password.length<6){
    return window.notify('Enter At least 6 Characters of password', 'error')
   }
   
   setIsProcesssing(true)

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     console.log(user)
     console.log('user created')
    return window.notify('Welcome to oPenPic You have successfully Registered',)
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     window.notify('Something went wrong!', 'error')
     // ..
   });
   setIsProcesssing(false)


  }


  return (
    <div className='auth-register'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card login-card  border-0 shadow p-2 p-md-3 p-lg-4">
              <div className="row">
                <div className="col">
                  <h3 className='mb-4 fw-bold'>Join Now</h3>
                  <hr />

                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <div className="col mt-3">
                      <button className='btn btn-transparent google-button border w-100 rounded-5'><img src={google} alt="" className='img-fluid mx-2' width={20} /> Continue with Google</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="col mb-5">
                      <button className='btn btn-transparent facebook-btn border w-100 rounded-5'><img src={facebook} alt="" className='img-fluid mx-2' width={25} /> Continue with Facebook</button>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="email">Full Name</label>
                    <input type="text" className='form-control' placeholder='Full Name' name='name' onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' placeholder='Enter Your Email' name='email' onChange={handleChange}/>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' placeholder='Enter Your Password' name='password' onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <button className='btn btn-singup text-white w-100' disabled={isProcessing} >
                      {!isProcessing ? 'join / Register' :
                        <div className='spinner-border spinner-border-sm'></div>}
                    </button>
                  </div>
                </div>
                <div className="row">

                  <div className="col-8">
                    <div class="form-check  mx-1">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-4">

                    <a href="#" className='text-end mt-2'>Forgot Password</a>
                  </div>
                </div>
              </form>
              <div className="row mt-4">
                <div className="col">
                  <p className="mb-0 text-center">Already have an Account! <Link to='/autentication/login' className=''>Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


