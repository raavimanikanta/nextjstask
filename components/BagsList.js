import React from 'react'
import classes from "./products.module.css"
import Data from './Images.json'

const BagsList = () => {
  return (
   <div >
    <div className={classes.ItemsDiv}>
      {
        Data.images.map(result=>{
          return (
            <>
            <div>
              <img className={classes.imageSize} src={result.imageurl} alt="Image not found"  />
              <p style={{color:"white",marginTop:"105px",marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"16px"}}>{result.title}</p>
            </div>
            </>
          )
          })
      }
    </div>
   </div>
  )
}

export default BagsList
