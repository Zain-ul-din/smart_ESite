import React from 'react'


export default function GoogleMap (props) {

    const link = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13827.22353881473!2d74.32891042666962!3d31.489274522779354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904105ec589ff%3A0x67af359ad6cad4b3!2sModel%20Town%20Park!5e0!3m2!1sen!2s!4v1650108609848!5m2!1sen!2s`
    return (
        <>
           <div className='mt-2 opacity-0' ref={props.mapRef}>..</div>
           <iframe className="map m-0" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
           src={link}
           allowFullScreen />
        </>
    )
}