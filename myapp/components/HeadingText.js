import React from 'react'
import Logo from './Logo'

const HeadingText = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center cursor-pointer">
        <Logo width={150} height={150} />
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
      </div>
  )
}

export default HeadingText