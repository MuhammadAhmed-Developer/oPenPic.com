import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AuthContext} from '../../../Context/AuthContext'
import { auth } from '../../../Config/Firebase';


const initialState = {
  email: '',
  password: '',
}

export default function Login() {

  const {dispatch} = useContext(AuthContext)
  const [state , setState] = useState(initialState)
  const [isProcessing, setIsProcesssing] = useState(false)
   const navigate = useNavigate()

const handleChange = (e) => {
    setState(s=>({...s,[e.target.name]:e.target.value}))
}


const handleSubmit = (e) => {
  e.preventDefault()
  const {email, password} = state
  setIsProcesssing(true)
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    dispatch({type:'LOGIN', payload:{user}})
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.notify('You are not currently Sing Up Please Sign Up!', 'error')
  }).finally(()=>{
    setIsProcesssing(false)
  })
  console.log(state)
  setIsProcesssing(true)

}

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
              <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                   <label>Email</label>
                  <input type="email" className='form-control' placeholder='Enter Your Email'  name='email' onChange={handleChange}  />
                </div>
               </div>
               <div className="row mb-4">
                <div className="col">
                   <label>Password</label>
                  <input type="password" className='form-control' placeholder='Enter Your Password'  name='password' onChange={handleChange} />
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
