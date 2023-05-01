import React, { useContext, useState } from 'react';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AuthContext } from '../../../Context/AuthContext';
import { firestore, storage } from '../../../Config/Firebase';
import dpimg from '../../../accests/images/upload image.png';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";
import MyUploads from '../MyUploads/MyUploads';
import { useNavigate } from 'react-router-dom';

const initialState = {
  img: '',
  description: '',
  imgName: ''
}

export default function Upload() {

  const { user } = useContext(AuthContext)
  const [state, setstate] = useState(initialState)
  const [file, setFile] = useState({})
  const [loading, setIsLoading] = useState(false)
  const [downloadURL, setDownloadURL] = useState('')
  const [progress, setProgress] = useState('')
 const navigate = useNavigate()



  const handleChange = (e) => {
    setstate(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    let { description, imgName, img } = state
    description = description.trim()
    imgName = imgName.trim()
    
    if(!file.name){
      return window.notify('Pleae Select Image', 'error')
}

    if (imgName.length < 3) {
      return window.notify('Pleae Enter Image Name', 'error')
    }
    if (description.length < 10) {
      return window.notify('Pleae Enter Description', 'error')
    }

    const filExtantion = file.name.split('.').pop();
    const randomId = Math.random().toString(36).slice(2)


    const storageRef = ref(storage, `userImg/${randomId}.${filExtantion}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDownloadURL(downloadURL)
          const photoURL = downloadURL
          let imgData = { description, imgName }
          imgData.photoURL = photoURL
          imgData.dateCreated = serverTimestamp()
          imgData.id = Math.random().toString(36).slice(2)
          imgData.createdBy = {
            uid: user.uid,
            displayName: user.displayName
          }


          imagesData(imgData)

        });
      }
    );



  }


  const imagesData = async (imgData) => {

    setIsLoading(true)

    try {
      await setDoc(doc(firestore, "imagesData", imgData.id), imgData);
      window.notify('Image has been Upload Successfully', 'success')
       navigate('/myuploads')
    } catch (error) {
      console.log(error)
      window.notify('Something went Wrong', 'error')

    }
    setIsLoading(false)




  }



  return (
    <>
      <div className="container-fluid upload-pg">
        <div className="row">
          <div className="col">
            <div className="card shadow border-0 p-3">
              <form onSubmit={handleSubmit}>
                <div className="col-12 text-center">
                  <label htmlFor="img-file" className='img-upload'><img src={dpimg} alt="upload image" className='img-fluid w-50 rounded-circle' />
                    <br /> <span className='text-white' id='select'>
                      {!file.name ? "Upload" : <>{file.name}</>}

                    </span>
                  </label>

                  <input type="file" id='img-file' className='d-none' name='img'
                    onChange={e => { setFile(e.target.files[0]) }} />
                </div>

                <div className="row py-3">
                  <div className="col" >
                    <input type="text" className='form-control' placeholder='Image Name' name='imgName' onChange={handleChange} />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <textarea name="description" placeholder='Image Description' rows="5" className='form-control' onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col" >
                    <input type="checkbox" /> <span className='text-light ms-1'>Only upload media I own the rights to, and not any purchased or copied media.</span> <br />
                    <input type="checkbox" /> <span className='text-light  ms-1'> I agree that my media will be released under the
                      <a href="https://pixabay.com/service/terms/" target='_blank'> Content License.</a></span>
                  </div>
                </div>
                {/* <p>`{`${progress}%`}`</p> */}
                <div className="row py-3">
                  <div className="col text-end" >
                    <button className='btn btn-light w-50 fw-bold text-info' disabled={loading}>
                      {!loading ? <><i className="bi bi-cloud-arrow-up-fill"></i> Upload</> : <> <div className='spinner-grow spinner-grow-sm'></div> <div className='spinner-grow spinner-grow-sm'></div> <div className='spinner-grow spinner-grow-sm'></div> <br /> {`${progress}%`}</>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <MyUploads/>
    </>
  )
}
