import React from 'react'
import Image from 'next/image'

import VectorImg from "./Images/Vector.png"
const ProductHeader = ({NumOfproduct}) => {
  return (
    <div style={{width:"75%",marginTop:"160px",marginLeft:"180px",display:"flex",justifyContent:"space-between",
                 fontFamily:"Encode Sans",fontStyle:"normal",fontWeight:"500",fontSize:"16px",lineHeight:"20px"}} >
        <div style={{color:"white"}}>
          <p>Fashion.Womens</p>
        </div>
        <div style={{color:"white"}}>
         <p>{NumOfproduct.products.length} Products <Image src={VectorImg} alt=""/></p>
        </div>
    </div>
  )
}

export default ProductHeader
