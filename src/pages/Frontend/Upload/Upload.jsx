import React from 'react'

export default function Upload() {


  const handleUpload = () => {
    
  }

  return (
    <>
     <div className="container-fluid upload-pg">
       <div className="row bg-warning mt-5 p-1">
        <div className="col mt-5">
          <p className='text-success fw-bold'><i class="bi bi-cone"></i> only upload media I own the rights to, and not any purchased or copied media.</p>
          <p className='text-success fw-bold'><i class="bi bi-cone"></i> agree that my media will be released under the <a href='https://pixabay.com/service/terms/' target='_blank'>Content License.</a></p>
        
          <label htmlFor="img-file" className='btn btn-light btn-lg w-100' onClick={handleUpload}><i class="bi bi-cloud-arrow-up-fill text-success"></i> Upload images</label>
          <input type="file" id='img-file' className='d-none'/>
        </div>
       </div>
     </div>
    </>
  )
}
