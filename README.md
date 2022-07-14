This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### React-Assignment using Nextjs :-
   This assignment is made by using reactjs framework called nextjs 
   This application consists of header,lists of bags ,and products header which indicates the number of products.
   The main aim of the project is to fetch the data from Api and render to the components.
   The data fetched from the Api is related to women it includes categories  like :
    Bags,jwellery,footwear,fashion . 

## Header:-
   This header shows all the categories which present in the entire application like bags,accesories,jwellery,fashion.
## Web Page Design :-
    I have designed the webpage by using the layout which has been made in the figma by taking that layout as the reference 
    I made this entire application.After making the layout as per the layout which is designed in figma.I used the Api link and fetched 
    the data according to the view of the application.

## To Import the images :-
   In order to use the images in this  project which are not present in the api link I saved the images from figma layout and stored all the 
   images in the json format and fetched the  data and rendered to the compoonents .

   In order use the images directly by saving in the folders .There is need to import particular image from the respective path 
   and we sholuld also import (Image) from the "next/image" .

### To Fetch the data from Api :- 
     In this project there is need to fetch the list of the products details like :
     The products images ,the actual price and special price of the products and the discount provided for the particular product.

     To fetch the data using the Nextjs. I have created a function and used the async, await keywords and  getStaticProps .
     and after getting the response from the Api .I passed that response (or)the data  which received through the Api to the product card 
     and by using the map array method fetched and rendered the list of products data to the respective productcard component .
     Through this i have got the products details like name ,price ,discount of the product .

     There are 10 products in the list of the products..

## CSS (styling to the application ):-
    To make the layout attractive ,I have given styling to the application .
    I have created the separate module.css files and provided styling to the respective component .

## **
  created all the components using the react  and imported the components to the nextjs pages folder.  






 



