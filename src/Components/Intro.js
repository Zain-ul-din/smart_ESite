
import React from 'react'

const IMG_PATH = 'bgIntro.jpg'

// <img className ='introImg img-responsive' src={`../static/${IMG_PATH}`} placeholder='Error' alt='loading...'/> 

// https://raw.githubusercontent.com/Zain-ul-din/smart_ESite/master/public/Static/bgIntro.jpg
export default function Intro (props) {
    return (
        <>
           <div className='Container'>
              <img className ='introImg img-responsive' src={`https://firebasestorage.googleapis.com/v0/b/ecomappi.appspot.com/o/files%2FbgIntro.jpg?alt=media&token=cd7d28b4-a7d0-44b6-9afa-d11ece3fc828`} placeholder='Error' alt='loading...'/> 
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