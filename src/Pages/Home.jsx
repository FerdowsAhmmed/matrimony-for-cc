import React from 'react'
import Navbar from '../Components/Shared/NavBar'
import Banner from '../Components/Banner'
import Shorting from '../Components/Shorting'
import Features from '../Components/Features'
import Spacial from '../Components/Spacial'
import Success from '../Components/Success'


function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Shorting></Shorting>
      <Features></Features>
      <Spacial></Spacial>
      <Success></Success>
    </div>
  //  <Shorting></Shorting>
  )
}

export default Home