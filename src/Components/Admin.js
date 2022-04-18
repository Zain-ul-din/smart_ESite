

import React from 'react'

import AddProductForm from './AddProductForm'

export default function Admin (props){
    
    return (
        <>
          { props.isAdmin && <>
          <div className='bottomLine pb-0'/>
          <div className='d-flex bg-dark w-100 justify-content-center p-5 pb-0'>
              <div className='text-center bg-dark'>
                 <h2 className='fw-bold text-info '>ADMIN</h2>
                 <h2 className='fw-bold text-light opacity-50'>ADD NEW PRODUCTS</h2>
              </div>
          </div>
          <div className='container-fuild p-5'>
              <AddProductForm
                reRender = {props.reRender}
              />
          </div> 
          </>}
        </>
    )
}