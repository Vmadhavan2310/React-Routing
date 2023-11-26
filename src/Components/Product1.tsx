import React from 'react'
import { useParams } from 'react-router-dom'
function Product1() {
    const param=useParams();
    const value=param.userid
  return (
    <div>Product1:variant{value}</div>
  )
}

export default Product1