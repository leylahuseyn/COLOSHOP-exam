import React from 'react'
import FirstPart from '../components/FirstPart'
import SecondPart from '../components/SecondPart'
import Cards from '../components/Cards'
import BestSellers from '../components/BestSellers'
import LatestBlogs from '../components/LatestBlogs'
import { useContext } from 'react'
import Maincontext from '../Context/Context'


const Home = () => {
  
  return (
    <div>
      <FirstPart/>
      <SecondPart/>
      <Cards/>
      <BestSellers />
      <LatestBlogs/>

    </div>
  )
}

export default Home