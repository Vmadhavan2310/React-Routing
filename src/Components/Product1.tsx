import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
function Product1() {
    const [filter,setFilter]=useSearchParams()
    const filterApplied=filter.get("filter")==="In-stock";
    const param=useParams();
    const value=param.userid
  return (
    <>
    <div>Product1:variant{value}</div>
    <button onClick={()=>setFilter({filter:"In-stock"})}>Apply filter</button>
    <button onClick={()=>setFilter()}>reset filter</button>
    {filterApplied?
    <div>Shows only Instock products</div>:
    <div>Shows all products</div>
}
    </>
  )
}

export default Product1