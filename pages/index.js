import axios from "axios"
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import BagsList from "../components/BagsList"

export default function Products ({posts}) {
     console.log(posts)
    return (
      <>
     <Header/>
     <BagsList />
     <ProductCard data={posts}/>
      </>
    )
}
export async function getStaticProps() {
    const res = await axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json')
    const posts = await res.data.data
    return {
        props: {
          posts,
        },
      }
    }


