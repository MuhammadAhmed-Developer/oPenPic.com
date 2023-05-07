import React, { useContext, useEffect, useState } from 'react'
import view from '../../../accests/images/carasoul6.jpg'
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../../Config/Firebase';
import { AuthContext } from '../../../Context/AuthContext';

export default function ImageView() {

    const { user } = useContext(AuthContext)
    const [document, setDocument] = useState([])
    const { imagesData, setImagesData } = useState([])


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
        //    setIsLoading(false)
    }


    useEffect(() => {
        fetchData()
    }, [user])




    return (
        <>
            <section className='bg-info'>
                <div className="container d-flex justify-content-center align-items-center">

                    <div className="container mt-5">
                        <div className="row mt-5">


                            {document.filter((doc) => {

                                return doc.id == imagesData.id
                                //  <div key={i} className='d-flex justify-content-center align-items-center'>
                                //     <div className="col-lg-6 col-md-6 col-sm-12 mt-5 py-5 d-flex justify-content-center align-items-center">
                                //         <div>
                                //             <img src={imagesData.photoURL} alt="" className='img-fluid w-100' style={{ cursor: 'pointer' }} />
                                //         </div>
                                //     </div>
                                //     <div className="col-lg-6 col-md-6 col-sm-12 mt-5 align-items-center">

                                //         <div className='mt-5'>
                                //         </div>
                                //         <h3 className='fw-bold'>Image Name: </h3>
                                //         <div className='ms-4'>
                                //             <h5>HTML CSS</h5>
                                //         </div>
                                //         <br />
                                //         <div>
                                //             <h3 className='fw-bold'>Image Description: </h3>
                                //         </div>
                                //         <div className='ms-4'>
                                //             <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, modi dolorem ex enim laborum neque temporibus fugiat velit commodi, ad doloremque dignissimos, sit nesciunt odio saepe facilis eum laudantium architecto?</h6>
                                //         </div>
                                //         <div className='mt-4 text-center'>
                                //             <button className='btn btn-warning w-75 py-3'>Download</button>
                                //         </div>
                                //     </div>

                                // </div>


                            })}



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
