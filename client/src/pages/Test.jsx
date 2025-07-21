import React from 'react'
import dummydata from '../assets/dummydata'
import TestComponent from '../components/testComponent';


function Test() {
  
  return (
    <div>
      <TestComponent dummydata={dummydata}/>
    </div>
  )
}

export default Test
