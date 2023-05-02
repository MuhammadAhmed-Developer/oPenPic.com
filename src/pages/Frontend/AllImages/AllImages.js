import React from 'react';
import img from '../../../accests/images/back-img.jpg'
import pro from '../../../accests/images/facebook.png'

export default function AllImages() {
  return (
    <>
     
     <section className='my-5 mx-3'>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 cl-sm-12">
                   <img src={img} alt="" className='img-fluid '/>

                    <div className='profiles'>
                   <img src={pro} alt="" className='img-fluid mb-3 mt-2 rounded-circle' style={{width: 50}}  />
                   <span className='fw-bold mt-3 text-white'>Muhammad Ahmed</span>
                    </div>
                </div>
            </div>
        </div>
     </section>

    </>
  )
}
