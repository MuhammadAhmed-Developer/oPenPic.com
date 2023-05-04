import React, { useContext, useEffect, useState } from 'react';
import img from '../../../accests/images/back-img.jpg'
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../../Config/Firebase';
import { AuthContext } from '../../../Context/AuthContext';

export default function AllImages() {

  const {user} = useContext(AuthContext)

  const [document, setDocument] = useState({})
  const [isLoading, setIsLoading] = useState(true)



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
 
   
 useEffect(()=>{
   fetchData()
   }, [user])



  return (
    <>
     
     <section className='my-5 mx-3'>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 cl-sm-12 box">
                   <img src={img} alt="" className='img-fluid '/>
                    <div className='icons m-3 text-end'>
                    <i class="bi bi-chat-left-heart text-danger fs-4 me-4"></i><i class="bi bi-collection text-info fs-4"></i>
                    </div>
                    <div className='profiles m-3'>
                    <i class="bi bi-person-circle text-warning fs-4 me-2"></i>
                   <span className='fw-bold mt-3 text-white data'>Muhammad Ahmed</span>
                    </div>
                </div>
            </div>
        </div>
     </section>

    </>
  )
}
