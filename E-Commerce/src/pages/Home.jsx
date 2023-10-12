import React, { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Products from '../components/Products'
import { useFetcher, useLoaderData } from 'react-router-dom'

const Home = () => {
 const [products, setProducts] = useState([])
 const data = useLoaderData();
useEffect(() => {
  setProducts(data.data)
}, [data])
  return (
    <>
     <Banner />
     <Products products={products} />
    </>
    )
}

export default Home