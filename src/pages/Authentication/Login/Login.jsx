import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {


  const [isProcessing, setIsProcesssing] = useState(false)


  return (
    <div className='auth'>
       <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
             <div className="card login-card  border-0 shadow p-2 p-md-3 p-lg-4">
               <div className="row">
                <div className="col">
                   <h3 className='mb-4 fw-bold'>Login Now</h3>
                </div>
               </div>
              <form >
              <div className="row mb-3">
                <div className="col">
                   <label htmlFor="email">Email</label>
                  <input type="email" className='form-control' placeholder='Enter Your Email'  name='email'   />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                   <label htmlFor="password">Password</label>
                  <input type="password" className='form-control' placeholder='Enter Your Password'  name='password'/>
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                  <button className='btn btn-warning w-100' disabled={isProcessing} > 
                  {!isProcessing ? 'Login' : 
                  <div className='spinner-border spinner-border-sm'></div>}
                   </button>
                </div>
                
                <a href="#" className='text-end mt-3'>Forgot Password</a>

               </div>
              </form>
               <div className="row">
                <div className="col">
                  <p className="mb-0 text-center">Need an Account? <Link to='/autentication/register' className=''>SignUp</Link></p>
                </div>
               </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  )
}
