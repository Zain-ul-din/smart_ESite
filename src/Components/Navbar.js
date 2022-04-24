import React ,{useState} from 'react'

import {HomeScrollAction } from '../App'
import {HiOutlineLogin , HiOutlineLogout} from 'react-icons/hi'

export default function Navbar (props) {

    const [toggleState , setToggleState] = useState('collapse')

    return (
        <> <nav className="navbar navbar-dark navbar-expand-lg bg-dark m-light "> 
       <a className="navbar-brand p-2 " href="/">Sultan Pipe Store</a>
        <button className="navbar-toggler m-2 text-center" type="button" onClick={(e)=>{
            e.preventDefault()
            setToggleState(toggleState === 'collapse' ? '' :'collapse' )
        }}>
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className={`${toggleState} navbar-collapse`} id="navbarNavDropdown">
       <ul className="navbar-nav text-center">
        <li className="nav-item active">
         <a className="nav-link" onClick={(e)=>{
             e.preventDefault()
             HomeScrollAction()
         }}>Home </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" onClick = {(e)=>{
            e.preventDefault()
            props.ProductsScrollAction()
        }}>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={(e)=>{
             e.preventDefault()
             props.AboutUsScrollAction()
         }}>About Us</a>
        </li>
        {/* Admin State*/}
        {props.isAdmin && <li className="nav-item">
          <a className="nav-link" onClick={(e)=>{
             e.preventDefault()
             window.scrollTo(0 , window.document.body.scrollHeight)
         }}>Admin</a>
        </li>}
        </ul>
        <div className='navbar-text ml-auto navLeft px-4 text-center pxo-sm'>
           {!props.isLogin  ? <a className='navbar-text' onClick={(e)=>{e.preventDefault(); props.SignInWithGoogle()}}> 
            <strong className='fs-4 navbar-text'> <HiOutlineLogin/> </strong> 
            <strong className='navbar-text'> Login</strong> </a> 
            :
            <><a className='navbar-text ' onClick={(e)=>{e.preventDefault(); props.SignOutAction()}}>
                 <strong className='fs-4 text-danger'> <HiOutlineLogout/> </strong> 
            <strong className='navbar-text text-danger'> Logout</strong> </a>
            </> }
        </div>
       </div>
       </nav> </>
    )
}