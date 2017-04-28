import React from 'react'
import Navbar from '../components/Navbar'

export default (props) => {
  return (
    <div>
    <Navbar />
    {
      props.children
    }
    </div>
  )
}