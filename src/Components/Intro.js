
import React from 'react'

const IMG_PATH = 'bgIntro.jpg'

// <img className ='introImg img-responsive' src={`../static/${IMG_PATH}`} placeholder='Error' alt='loading...'/> 

export default function Intro (props) {
    return (
        <>
           <div className='Container'>
              <img className ='introImg img-responsive' src={`require(/Static/${IMG_PATH})`} placeholder='Error' alt='loading...'/> 
              <div className="centeredTop p-2"><h1 className='text-light'>Welcome to SPS SULTAN PIPE STORE SITE</h1></div>
              
              <div className="centered hideUnderMin p-2">
              <p className='fw-bold '>Sultan pipe store is a wholesale shop we deals with  pvc-upvc pipes, fittings, watertanks and all sanitary and some electric items like wires..we provide the best with best price.Our main product companies are Popular,Gm,Jm,welco,Metro  etc</p>
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