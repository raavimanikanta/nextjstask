import React from 'react'
import classes from "./Header.module.css"
import Data from "./Header.json"
const Header = () => {
  return (
    <>
    <div className={classes.header}>

     <div className={classes.Headertext}>
        <p>{Data.mainTitle}</p>
     </div>

     <div className={classes.HeaderImagesDiv}>
           {
            Data.icons.map(result=>{
                return (
                    <>
                    <img src={result.iconUrl} alt="" className={classes.headerImagesSizes} />
                    </>
                )
            })
           }
     </div>
    </div>
    
     <div className={classes.HeaderCategoryTextdiv}>
      {
          Data.headerTitles.map(result=>{
              return (
                  <>
                  <div style={{color:"white"}}>{result.title}</div>
                  </>
              )
          })
      }
   
   </div>
   </>
  )
}

export default Header