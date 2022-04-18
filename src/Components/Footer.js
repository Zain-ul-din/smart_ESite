import React from 'react'
import toast from 'react-hot-toast'

import { AiFillPhone , AiOutlineMail} from "react-icons/ai"
import { SiGooglemaps } from "react-icons/si"
import { FaHome , FaShoppingCart } from 'react-icons/fa'
import { CopyToClipBoard , HomeScrollAction } from '../App'

export default function Footer (props) {

  return (
    <>
       <footer className='bg-dark px-lg-5 px-sm-2 m-0'>
          <div className='container centercards' ref={props.aboutUsRef}>
            {/* BootStrap Grid*/}
            <div className='row text-light py-4'>
                  <div className='col-lg-4 col-sm-6 text-center'>
                      <h2 className='pd-3 text-light'>ABOUT US</h2>
                       <p className='small font-monospace opacity-75 text-wrap'>
                         Add some about us text here
                       </p>
                  </div>
                  <div className='col-lg-2 col-sm-6 text-center'>
                        <h4 className='pb-2 text-light pt-1'>Visit Us</h4>
                        <ul className='list-unstyled'>
                             <li className='my-2'>
                               <a 
                                onClick={(e)=>{
                                 e.preventDefault() 
                                 HomeScrollAction()
                                }} 
                                 className='footer-link text-info py-1 footertext'><FaHome/> Home<strong className='opacity-0'>cts</strong></a>
                             </li>
                             <li className='my-2'>
                               <a onClick={(e)=>{
                                 e.preventDefault()
                                 props.ProductsScrollAction()
                               }} className='footer-link text-info py-1 footertext'><FaShoppingCart/> Products</a>
                             </li>
                             <li className='my-2'>
                               <a onClick = {(e)=>{
                                 e.preventDefault()
                                 props.MapScrollAction()
                               }} className='footer-link text-info py-1 footertext text-wrap'><SiGooglemaps/> Chak no 447 Eb burewala pakistan</a>
                             </li>  
                        </ul>
                  </div>
                  <div className='col-lg-2 col-sm-6 text-center'>
                        <h5 className='pb-3 text-light pt-1'>Need Help?</h5>  
                        <ul className='list-unstyled'>
                             <li >
                               <a onClick={(e)=>{
                                 e.preventDefault()
                                 CopyToClipBoard(e.target.innerText)
                                 toast.success('Text Copied' , {
                                  style:{
                                    borderRadius : '10px' , 
                                    background : '#333' ,
                                    color : '#fff',
                                  }
                                 })
                               }} className='footer-link text-info py-1'><AiOutlineMail/> fy01608@gmail.com</a>
                             </li> 
                        </ul>
                  </div>
                  <div className='col-lg-4 col-sm-6 text-center'>
                        <h5 className='pb-3 text-light'>Contact Now</h5>
                        <ul className='list-unstyled'>
                             <li >
                               <a  className='footer-link text-info py-1 small' onClick={(e)=>{
                                 e.preventDefault()
                                 CopyToClipBoard(e.target.innerText)
                                 toast.success('Text Copied' , {
                                  style:{
                                    borderRadius : '10px' , 
                                    background : '#333' ,
                                    color : '#fff',
                                  }
                                 })
                               }}> 
                               <AiFillPhone/> +92 311 6287297
                               </a>
                             </li>
                        </ul>   
                  </div>
                  
            </div>
          </div>
       </footer>
    </>
  )
}


//current.scrollIntoView({behavior : 'smooth'})