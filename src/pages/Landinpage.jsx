import React from 'react'
import Men from '../components/Men'
import Women from '../components/Women'
import Jewelery from '../components/Jewelery'
import Electronics from '../components/Electronics'
import Navbar from '../components/Navbar'
import Swipercomp from '../components/Swipercomp'

function Landinpage() {
  return (
    <div>
        <Navbar/>
        <Swipercomp/>
        <Men/>
        <Women/>
        <Jewelery/>
        <Electronics/>
        
        
    </div>
  )
}

export default Landinpage