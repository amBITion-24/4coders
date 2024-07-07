import React from 'react'
import Card from '../components/home/Card'
import Footer from '../components/home/Footer'
import NavbarHome from '../components/home/NavbarHome'

const AddCards = (prop) => {
  return (
    <div>
      <NavbarHome></NavbarHome>
        <Card publickey={prop}></Card>
        <Footer></Footer>
    </div>
  )
}

export default AddCards