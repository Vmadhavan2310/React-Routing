import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Collection() {
  return (
    <>
    <div>Collection</div>
    <div className='products'>
     <nav>
    <Link to="product1">Product1</Link>
    <Link to="product2">Product2</Link>
    </nav>
    </div>
    <Outlet/>
    </>
  )
}

export default Collection