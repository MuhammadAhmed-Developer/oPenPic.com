import {toast} from 'react-toastify'

window.notify = (msg, type)=>{
    const option= {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        
    }

    switch(type){
     case 'success':
        toast.success(msg,option)
        break
     case 'error':
        toast.error(msg,option)      
        break
    default:
        toast(msg,option)
    }
}