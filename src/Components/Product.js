import React ,{useEffect, useState} from 'react'


import { doc , deleteDoc } from 'firebase/firestore'
import { FireBaseStore ,Storage } from '../Firebase/FireBaseInit'
import toast from 'react-hot-toast'
import { ref , deleteObject} from 'firebase/storage'


export default function Product (props) {
      
  


    async function DeleteData (docKey){
      await deleteDoc(doc(FireBaseStore, "products", docKey))
    }
   
    async function DeleteImage (path){
      const imgRef = ref(Storage, path)
      await deleteObject(imgRef)
    }

    function DeleteDataAction () {
       DeleteImage(props.imgURL)
       DeleteData(props._id)
       props.reRender()
    } 
    
    
    
    
    return (
        <>
           <div className="card " style={{width: "18rem"}}>
           <img className="card-img-top rounded" src={props.imgURL} alt="Card image cap" />
            <div className="card-body rounded">
              <h5 className="card-title text-info">{props.name}</h5>
                <p className="card-text">{props.description}</p>
              <a  className="btn btn-primary text-center">Price : {props.price}</a>
              <div></div>
                {props.isAdmin && <button className='btn btn-info btn-sm  mx-2 my-2 rounded'
                   onClick = {(e)=>{
                     e.preventDefault()
                     props.onEdit()
                   }}
                >Edit</button>}  
            {props.isAdmin && <button className='btn btn-danger btn-sm  mx-2 my-2 rounded'
              onClick={(e)=>{
                e.preventDefault()
                toast((t)=>(
                  <>
                  <div className='d-flex justify-content-center flex-column'>
                  <div className='conatiner-fuild text-center '>Are you sure to Delete ?</div>
                   
                   <div className='container-fuild'>
                    <button className='btn btn-sm btn-danger p-2 m-2 rounded' onClick={(e)=>{
                      e.preventDefault()
                      DeleteDataAction()
                      toast.dismiss(t.id)
                    }}>Delete</button>
                    <button className='btn btn-sm btn-info p-2 m-2 rounded mx-2' onClick={(e)=>{
                      e.preventDefault()
                      toast.dismiss(t.id)
                    }}>Cencel</button>
                    </div>
                  </div>
                  </>
               ),{
                autoClose: false // prevent hot-toast to close automatically
                , style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                }
              })
              }}
            >delete</button>}
         </div>
        </div>

       
        </>
    )
}