import React from 'react'
import Proposals from '../components/home/Proposals'
import NavbarHome from '../components/home/NavbarHome'
import Footer from '../components/home/Footer'
const Proposalpage = () => {
  return (
    <div className='bg-gray-900'>
        <NavbarHome></NavbarHome>
        <Proposals></Proposals>
        <Footer></Footer>
        
    </div>
  )
}

export default Proposalpage