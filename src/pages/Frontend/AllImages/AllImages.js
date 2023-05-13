import React, { useContext, useEffect, useState } from 'react';
import img from '../../../accests/images/back-img.jpg'
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../../Config/Firebase';
import { AuthContext } from '../../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function AllImages() {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [document, setDocument] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [imagesData, setImagesData] = useState({})
  const [isProcessing, setIsProcessing] = useState(true)
  const [like, setLike] = useState('bi-suit-heart')

  const fetchData = async () => {

    let array = []

   const q = query(collection(firestore, "imagesData"));

   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     // doc.data() is never undefined for query doc snapshots
   //   console.log(doc.id, " => ", doc.data());
         let data = doc.data()
       //   console.log('data', data)
         array.push(data)
   })
   setDocument(array)
   setIsLoading(false)
   }
  
  //  console.log(document)
   
 useEffect(()=>{
   fetchData()
   }, [user])


   const handleLike = () => {
         setLike('bi-suit-heart-fill')
   
   }


  //  const handleView = () =>{
  //   // 
  //   document.filter((doc)=>{
  //     return doc.id !== imagesData.id
  //   })
  //   navigate('/imageview')
      

  //  }




  return (
    <>
     
     <section className='my-5 mx-3'>
        <div className="container-fluid my-5">
             {isProcessing ?
            <div className="row g-4 images-in-home">
               {document.map((imagesData, i)=>{
               return <div key={i} className=" col-lg-4 col-md-6 cl-sm-12 box  ">
                <div className='card border-0 mx-auto img-home d-flex justify-content-center align-items-center ' style={{overflow:'hidden'}}>
                 <img src={imagesData.photoURL} alt="" className='img-fluid w-75'/>
                  <div className='icons w-75 '>
                  {/* <i className="bi bi-person-circle text-warning fs-4 me-2"></i> */}
                 {/* <Link to='/profile'  target='_blank' className='fw-bold  mt-3 text-light data' style={{fontSize: 10}}>{imagesData.displayName}</Link> */}
                   <div className='show-icon'>
                  <i className="bi bi-cloud-arrow-down-fill text-success fs-3  me-2"></i><span className='text-light'>4.4k</span>
                  <i className="bi bi-suit-heart-fill  text-danger fs-3 me-3" onClick={handleLike}></i>

                   </div>
                  </div> 
                              
                </div>
              </div>
               })}
            </div>
          : 
          <div className='text-center'>
            {/* <div className='spinner-border'></div> */}
            </div>
           }
        </div>
     </section>

    </>
  )
}
