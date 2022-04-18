
import React from 'react'


export default function Intro (props) {
    return (
        <>
           <div className='Container'>
              <img className ='introImg img-responsive' src='/static/Intro.jpg' placeholder='Error' alt='loading...'/> 
              <div className="centeredTop p-2"><h1 className='text-light'>Hey Customer's welcome here</h1></div>
              
              <div className="centered hideUnderMin p-2">
              <p className='fw-bold '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod te incididunt ut labore et dolore magna a</p>
              </div>

              <div className = 'BottomAlign'>
                  <button className='btn btn-info btn-md rounded' onClick = {(e)=>{
                      e.preventDefault()
                      props.ProductsScrollAction()
                  }}>Explore More!</button>
              </div>
           </div>

        </>
    )
} 