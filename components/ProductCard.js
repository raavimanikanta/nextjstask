import React from 'react'
import Image from 'next/image'
import RuppeImg from "./Images/rupeesign.png"
import classes from "./Productcard.module.css"
import Bookmark from "./Images/savetag.png"
import CartImg from "./Images/shoppingbag.png"
import ProductHeader from "../components/ProductHeader"
const ProductCard = ({data}) => {
  console.log(data)
  return (
    <>
    <ProductHeader NumOfproduct={data}/>
    <div className={classes.productDiv}>
        {
        data.products.map(result=>{
          return (
            <>
         <div key={Math.random()}style={{backgroundImage:`url(${result.plpimaage})`,
            backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
            width:"300.39px",height:"430.53px",margin:"40px",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",}}>
              
              <div className={classes.saveTag}>
              <Image src={Bookmark} alt="images not found"  />
              </div>
              <div style={{marginTop:"390px"}}>
              <div className={classes.productname}>{result.name}</div>

              <div className={classes.pricecartDiv}>
              <div style={{marginTop:"10px"}}>
              <span className={classes.price}><Image src={RuppeImg} alt="images not found" style={{height: "19px"}} />{result.special_price}</span>
              <span className={classes.actualprice}>{result.price}</span>
              <span className={classes.discount}>({result.discount}%)</span>
              </div>
              <div className={classes.cart}>
              <Image src={CartImg} alt="images not found"  />
              </div>
              </div>
          </div>
        </div>
        </>
          )
        })
       }
    </div>
    </>
  )
}

export default ProductCard