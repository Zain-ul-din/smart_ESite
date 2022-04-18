import React , {useState , useEffect} from 'react'
import toast from 'react-hot-toast'

// FireBase Imports
import { ref , deleteObject , uploadBytesResumable , getDownloadURL} from 'firebase/storage'
import { Storage , FireBaseStore } from '../Firebase/FireBaseInit'
import { updateDoc , doc } from 'firebase/firestore'

import Loading from './Loading'

export default function EditProduct (props) {

   const [name , setName] = useState('')
   const [price , setPrice]  = useState('')
   const [description , setDescription] = useState('')
   const [img , setImg] = useState(undefined)
   const [loader , setLoader] = useState(false)

   useEffect (()=>{
      const userData = props.data.data
      setName(userData.name)
      setDescription(userData.description)
      setPrice(userData.price)
      setImg(undefined)
   } , [props])
   
    async function DeleteImage (path){
     const imgRef = ref(Storage, path)
     await deleteObject(imgRef)
    }
    
    const uploadFile = async (file) =>{
        if(!file) return
   
        const imgRef = ref(Storage , `/files/${file.name}`)
        await uploadBytesResumable(imgRef , file)
        
        const downloadImg = await getDownloadURL(ref(Storage , `/files/${file.name}`))
        
        return downloadImg
    }

    async function UpdateDataCloud (key , data) {
        const docRef = doc(FireBaseStore, "products", key)
  
        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, data)

       
    }

    async function UpdateData (){
       let isValid = name.trim() !== '' && price.trim() !== '' && description.trim() != '' 
       
       if (!isValid){
        toast.error('Some fields are missing' , {
            style:{
              borderRadius : '10px' , 
              background : '#333' ,
              color : '#fff',
            }
        })
        return
       }
       setLoader(true)
       // Delete Prev Image
       if (img !== undefined){
          console.log('logged in')
          DeleteImage(props.data.data.imgURL)
          var newImgURL =  await uploadFile(img)
          console.log(newImgURL)
          
          UpdateDataCloud(props.data._id , {
            name : name , 
            description : description ,
            price : price ,
            imgURL : newImgURL
          })
          setLoader(false)
          toast.success('data has been uploaded !!' , {
            style:{
              borderRadius : '10px' , 
              background : '#333' ,
              color : '#fff',
            }
          })
          props.setEditState(null)
          props.reRender()
          return 
       }
         
       UpdateDataCloud(props.data._id , {
           name : name , 
           description : description ,
           price : price
       })
       setLoader(false)

       toast.success('data has been uploaded !!' , {
        style:{
          borderRadius : '10px' , 
          background : '#333' ,
          color : '#fff',
        }
       })
       props.setEditState(null)
       props.reRender()
   }
   
    return (
        <>
           <div className = 'container bg-dark p-2 w-100 fixed-bottom px-5 rounded'>
              <h2 className='text-center fw-bold text-light'>Edit Form </h2>

              {/*Name Input */}
              <div className='text-center px-5 py-2'>
                <label className='text-light text-center py-2 '>Enter Product Name : </label>
                <input type={'text'} className='form-control rounded' value={name} onChange={
                   (e)=>{
                       e.preventDefault()
                       setName(e.target.value)
                   }
                }/>
              </div>

              {/* description input*/}
              <div className='text-center px-5 py-2'>
                <label className='text-light text-center py-2'>Enter Description : </label>
                <textarea type={'text'} className='form-control rounded' value={description} 
                   onChange = {(e)=>{
                       e.preventDefault()
                       setDescription(e.target.value)
                   }}
                />
              </div>

              {/*  Price Input */}
              <div className='text-center px-5 py-2'>
                <label className='text-light text-center py-2'>Enter Product Price : </label>
                <input type={'number'} className='form-control rounded' value={price} 
                   onChange = {(e)=>{
                    e.preventDefault()
                    setPrice(e.target.value)
                   }}
                />
              </div>

              {/* File Input */}
              <div className='text-center px-5 py-2'>
                <label className='text-light text-center py-2'>Select File: </label>
                <input type={'file'} className='form-control rounded'  
                  onChange = {(e)=>{
                    e.preventDefault()
                    setImg(e.target.files[0])
                  }}
                />
              </div>

              <div className='text-center px-5 py-2'>
                <a href={props.data.data.imgURL} target={'_blank'} className = 'text-underline text-info'>Current Image [LINK]</a>
              </div>
              
              <Loading 
                Loading = {loader}
              />

              {/* Btns */}
              <div className='container w-100 px-5 text-center'>
               <button className='btn btn-danger text-center py-2 m-2 rounded' 
                  onClick={(e)=>{
                      e.preventDefault()
                      props.setEditState(null)
                  }}
               >Cencel</button>
               <button className='btn btn-success text-center py-2 m-2 rounded'
                 onClick={(e)=>{
                     e.preventDefault()
                     UpdateData()
                 }}
               >Save</button>
              </div>
              <div className='container w-100 px-5'>
               
              </div>
           </div>
        </>
    )
}