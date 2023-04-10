import React from 'react'

export default function Login() {
  return (
    <div>
      <div className="container bg-dark">
                <form action="">
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
                      <a href='#' className='text-success'>Forgot Password?</a>
                    </div>
                  </div>
                  <div className="py-2 mt-4 text-center">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button type="button" className="btn btn-success rounded-5 text-white fw-bold w-50" data-bs-dismiss="modal">Login</button>
              </div>
                </form>
              </div>
    </div>
  )
}
