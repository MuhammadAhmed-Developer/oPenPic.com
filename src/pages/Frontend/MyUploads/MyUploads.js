import React, { useContext, useEffect, useState } from 'react';
import myimg from '../../../accests/images/upload image.png';
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { AuthContext } from '../../../Context/AuthContext';
import { auth, firestore } from '../../../Config/Firebase';


export default function MyUploads() {

    const {user} = useContext(AuthContext)
    const [document, setDocument] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingDelete, setIsLoadingDelete] = useState(false)

//  console.log(document)
   const {imagesData, setImagesData} = useState([])



    const fetchData = async () => {

         let array = []

        const q = query(collection(firestore, "imagesData"), where("createdBy.uid", "==", user.uid));

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


    const handleDelete =async (imagesData)=>{
        
        try {
            await deleteDoc(doc(firestore, "imagesData", imagesData.id));
            window.notify('Event has been Deleted', 'success')
            let newDocuments = document.filter((doc) => {
                return doc.id !== imagesData.id
            })
            setDocument(newDocuments)

        } catch (err) {
            console.log(err)
            window.notify('Something went wrong', 'error')
        }


    }

    return (
        <>
            <section className='myuploads '>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className='my-img' >My Images</h1>
                        </div>
                        <div className="row mt-5">
                            {!isLoading ? 
                            
                             <>
                            {document.map((imagesData, i)=>{
                              return <div key={i} className="col-lg-6 col-md-12 col-sm-12">
                                    <div  className="card mx-auto p-3 mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-12">
                                            <img src={imagesData.photoURL} className="img-fluid rounded-start  w-100 img-fluid" alt="Image" />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="card-body ">

                                                <h5 className="card-title mt-3">Image Name</h5>
                                                <p className="card-text">{imagesData.imgName}</p>

                                                <h5 className="card-title">Image Description</h5>
                                                <p className="card-text">{imagesData.description}</p>
                                                <div className='text-end'>
                                                    <button className='btn btn-danger btn-sm' disabled={isLoadingDelete} onClick={()=>{handleDelete(imagesData)}}>Delete</button>
                                                    {/* <button className='btn btn-info ms-2 btn-sm'>Change</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            })}
                           </>
                            : <div className='text-center '><div className='spinner-grow  text-info '></div><div className='mx-2 spinner-grow  text-info '></div><div className='spinner-grow  text-info '></div></div>
                            
                        }
                          
                        
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
