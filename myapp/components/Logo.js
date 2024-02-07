import React from 'react'

const Logo = ({ width, height }) => {
  return (
    <div>
        <img
        src='../logo.png'
        width={width}
        height={height}
        className="transition duration-300 ease-in-out transform hover:scale-110"
        alt='logo'
        />
    </div>
  )
}

export default Logo