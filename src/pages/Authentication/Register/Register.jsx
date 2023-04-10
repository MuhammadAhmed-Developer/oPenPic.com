import React from 'react';
import google from '../../../accests/images/googlr.png';


export default function Register() {
  return (
    <div>

<div className="container">
                <form action="">
                  <div className="row">
                    <div className="col">
                    <div className="col my-5">
                      <button className='btn btn-transparent google-btn border w-100 rounded-5'><img src={google} alt="" className='img-fluid mx-3' width={15} /> Continue with Google</button>
                    </div>
                    </div>
                  </div>
                  <div className="row">
                    
                    <div className="col my-3">
                      <label  className='fw-bold mb-1'>Full Name</label>
                      <input type="text" className="form-control " placeholder="Full name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col my-3">
                      <label  className='fw-bold mb-1'>Email</label>
                      <input type="email" className="form-control " placeholder="abc@gmail.com" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col my-3">
                      <label  className='fw-bold mb-1'>Password</label>
                      <input type="password" className="form-control " placeholder="Password" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label className="form-check-label ms-2" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                    </div>
                    <div className="col-4 text-end">
                      <a href='#' className='text-primary'>Forgot Password?</a>
                    </div>
                  </div>
                  <div className="py-2 mt-4 text-center">
                 <button type="button" className="btn btn-primary rounded-5 text-white fw-bold w-75" data-bs-dismiss="modal">Sign Up</button>
              </div>
                </form>
              </div>
    </div>
  )
}
