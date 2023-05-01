import React, { useContext, useEffect, useState } from 'react';
import myimg from '../../../accests/images/upload image.png';
import { collection, query, where, getDocs } from "firebase/firestore";
import { AuthContext } from '../../../Context/AuthContext';
import { auth, firestore } from '../../../Config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';


export default function MyUploads() {

    const {user} = useContext(AuthContext)
    const [document, setDocument] = useState({})
    const [isLoading, setIsLoading] = useState(true)
//  console.log(document)
   const {imagesData, setImagesData} = useState([])


   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log(uid)
        console.log('User is signed In')
        // readUserData(user)

        // ...
        // dispatch({type:"LOGIN", payload:{user}})
      } else {
        console.log('User is signed out')
        // ...
      }
    })
  }, [])


    const fetchData = async () => {

         let array = []
        const q = query(collection(firestore, "imagesData"), where("createdBy.uid", "==", user.uid));
         console.log(user.uid)
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            let data = doc.data
            array.push(data)
        });
        setDocument(array)
        setIsLoading(false)
        // console.log(document)
    }

    useEffect(()=>{
        fetchData()
    }, [user])

    return (
        <>
            <section className='myuploads mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className='my-img' >My Images</h1>
                        </div>
                        <div className="row mt-5">
                            {!isLoading ? 
                            
                            <div className="col-lg-6 col-md-12 col-sm-12">

                            {document.map((imagesData, i)=>{
                                    <div key={i} className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={imagesData.photoURL} className="img-fluid rounded-start w-100 img-fluid" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body ">

                                                <h5 className="card-title mt-3">Image Name</h5>
                                                <p className="card-text">{imagesData.imgName}</p>

                                                <h5 className="card-title">Image Description</h5>
                                                <p className="card-text">{imagesData.description}</p>
                                                <div className='text-end'>
                                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                                    <button className='btn btn-info ms-2 btn-sm'>Change</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}

                            </div>
                            : <><div className='spinner-grow  text-info '></div><div className='mx-2 spinner-grow  text-info '></div><div className='spinner-grow  text-info '></div></>
                            
                        }
                          
                        
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
