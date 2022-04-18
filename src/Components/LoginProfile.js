

import React from 'react'


export default function LoginProfile (props) {
    return (
        <>
           {props.user && <div className='bg-dark lp opacity-75'>
                 <p className='text-light '>logged in as _ <strong className='text-info'>{props.user.name}</strong></p>
           </div>}
        </>
    )
}