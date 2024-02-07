import Footer from '@/components/Dashboard/Footer/Footer'
import Navbar from '@/components/Dashboard/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className=''>
        <Navbar />
        <div className='min-h-screen'>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout