import React from 'react'
import toast from 'react-hot-toast'

export default function Loading (props) {
     return (
         <>
           {props.Loading && <> <div className="d-flex justify-content-center py-2 my-2">
            <div className="spinner-border" role="status">
            <span className="sr-only"></span>
            </div>
            <h2 className='px-3 mx-1 pt-1'>Saving....</h2>
           </div></>}
         </>
     )
}
