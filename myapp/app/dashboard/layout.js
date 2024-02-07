import Navbar from '@/components/Dashboard/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        {children}
    </div>
  )
}

export default layout