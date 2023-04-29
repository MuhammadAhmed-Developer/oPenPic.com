import React, { useState } from 'react';
import uploadimg from '../../../accests/images/upload image.png';
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from '../../../Config/Firebase';


const initialState = {
   img:'',
   msg:'',
   imgName:''
}

export default function Upload() {

  const [state, setstate] = useState(initialState)
  const [file, setFile] = useState({})
  const [loading, setIsLoading] = useState(false)


  const handleChange = (e) =>{
     setstate(s=>({...s,[e.target.name]:e.target.value}))
  }

  const handleSubmit =async (e) => {
       e.preventDefault()
      // console.log(state)
      // console.log(file)

let {msg, imgName , img} = state
msg = msg.trim()
imgName = imgName.trim()

if(msg.length < 10){
  return window.notify('wrong', '')
}





let uploads = {msg , imgName}


     try{
      await setDoc(doc(firestore, "Uploads", Math.random().toString(36).slice(2)), uploads) ;
     }catch(err){
       console.error(err)
     }




  }


  const handleUpload = ()=>{



  }


  return (
    <>
      <div className="container-fluid upload-pg">
        <div className="row">
          <div className="col">
            <div className="card shadow border-0 p-3">
              <form onSubmit={handleSubmit}>
              <div className="col-12 text-center">
                <label htmlFor="img-file" className='img-upload'><img src={uploadimg} alt="upload image" className='img-fluid w-50 rounded-circle' />
                <br/> <span className='text-white' id='select'>
                {!file ? "Upload" : <>{file.name}</>}
 
                </span>
                </label>

                <input type="file" id='img-file' className='d-none' name='img' 
                onChange={e=>{setFile(e.target.files[0])}} />
              </div>
              <div className="row py-3">
                <div className="col">
                  <textarea name="msg" placeholder='Image Description' rows="5" className='form-control' onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col" >
                  <input type="text" className='form-control' value={file.name} placeholder='Image Name' name='imgName' onChange={handleChange} />
                </div>
              </div>
              <div className="row py-3">
                <div className="col" >
                  <input type="checkbox" /> <span className='text-light ms-1'>Only upload media I own the rights to, and not any purchased or copied media.</span> <br/>
                  <input type="checkbox" /> <span className='text-light  ms-1'> I agree that my media will be released under the 
                  <a href="https://pixabay.com/service/terms/" target='_blank'> Content License.</a></span> 
                </div>
              </div>
              <div className="row py-3">
                <div className="col text-end" >
                  <button className='btn btn-light w-50 fw-bold text-info' disabled={loading}>
                    {!loading ? <><i class="bi bi-cloud-arrow-up-fill"></i> Upload</> : <> <div className='spinner-grow spinner-grow-sm'></div> <div className='spinner-grow spinner-grow-sm'></div> <div className='spinner-grow spinner-grow-sm'></div></>}
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
