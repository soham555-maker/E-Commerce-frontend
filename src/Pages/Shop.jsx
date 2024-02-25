import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../Components/Hero/Hero'
import { useParams } from 'react-router-dom'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Collections from '../Components/Collections/Collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  const [count, setCount] = useOutletContext();
  return (
    
    <div>
      
      <Hero/>
      <Popular catagory={count}/>
      {/* <Offers/> */}
      <Collections/>
      {/* <NewsLetter/> */}
    </div>
  )
}

export default Shop
