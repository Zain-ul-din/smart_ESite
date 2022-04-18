import React , { useState} from 'react'

import {   collection  , addDoc  } from "firebase/firestore"
import { FireBaseStore , Storage } from '../Firebase/FireBaseInit'
// import {  deleteDoc } from "firebase/firestore"
import { ref , uploadBytesResumable , getDownloadURL} from 'firebase/storage'

import Loading from './Loading'

import toast from 'react-hot-toast'




export default function AddProductForm (props){

  
    
   const uploadFile = async (file) =>{
     if(!file) return
     const imgRef = ref(Storage , `/files/${file.name}`)
     await uploadBytesResumable(imgRef , file)
     const downloadImg = await getDownloadURL(ref(Storage , `/files/${file.name}`))
     return downloadImg
   }

    // Write Data
    async function writeUserData(object) {
        const db = FireBaseStore
        await addDoc(collection(db, "products"), object)
    }    
    
    const [loadingState , SetLoadingState] = useState(false)

    const [productName , setProductName] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [img , setImg] = useState('')
    
    const productData = {
      name : '' ,
      description : '',
      price : '' ,
      imgURL : ''
    }
    
    async function UploadData () {
      let isValidData = (
        productName.trim() !== '' && description.trim() !== '' &&
        price.trim() !== '' && img !== ''
      )
      
      if(!isValidData) { // !! hanlde err here
        toast.error('Some fields are missing' , {
          style:{
            borderRadius : '10px' , 
            background : '#333' ,
            color : '#fff',
          }
        })
        return
      }

      SetLoadingState(true)
      const URL = await uploadFile(img)
      
      productData.name = productName
      productData.description = description
      productData.price = price
      productData.imgURL = URL
       
      console.log(productData)
      SetLoadingState(false)
      writeUserData(productData)
      setProductName('')
      setDescription('')
      setPrice('')
      setImg('')
      toast.success('Data Has been Uploaded' ,{
        icon: '😊',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })

      props.reRender()
    }

    return(
        <> 
           <div className="input-group mb-3">

             {/* Name Input */}

            <input type="text" value={productName} className="form-control bg-dark text-light" placeholder="Product Name "
                   onChange={(e)=>{
                     e.preventDefault()
                     setProductName(e.target.value)
                   }}
            />
           </div>
           <label className='py-2 fw-bold'>Enter Product Description</label> 
           <div className="input-group mb-3">

             {/* description Input */}

             <textarea value={description} className="form-control bg-dark text-light " maxLength={'150'} placeholder='Enter Description'
                    onChange={(e)=>{
                      e.preventDefault()
                      setDescription(e.target.value)
                    }}
             />
           </div>
           <label className='py-2 fw-bold'>Enter Price in PKR</label>
           <div className="input-group mb-3">

             {/* Price Input */}

            <input value={price} type="number" className="form-control bg-dark text-light" placeholder="Price - PKR" 
                     onChange={(e)=>{
                      e.preventDefault()
                      setPrice(e.target.value)
                    }}
            />
            <div className="input-group-append">
              <span className="input-group-text bg-dark text-light ">{price} PKR</span>
            </div>
            <div className='w-100 mt-3'></div>
            <label className='py-2 fw-bold'>Choose Image</label>
            <div className="input-group mb-3 ">
               <input type="file" className="form-control bg-dark text-light" onChange={e=>{
                 e.preventDefault()
                 const file = e.target.files[0]
                 setImg(file)
               }}/>
            </div>
           </div>
           <Loading
             Loading = {loadingState}
           />
           <div className='text-center'>
               <button className='btn btn-dark rounded btn-md' onClick={(e)=>{
                 e.preventDefault()
                 UploadData()
               }}>Submit</button>
           </div>
        </>
    )
}