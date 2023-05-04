import React from 'react'
import {Spinner,ProgressBar} from 'react-bootstrap'
const ShowSpinner = () => {
  const now = 60;
  return (
    <div>
       {/* <ProgressBar now={now} label={`${now}%`} /> */}
     {/*  <Spinner animation="grow" variant="dark" /> */}
       <Spinner    
       as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"/>
               <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default ShowSpinner

