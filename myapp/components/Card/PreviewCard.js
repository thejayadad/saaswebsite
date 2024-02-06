import React from 'react'
import Image from 'next/image'


const PreviewCard = ({url, onClick}) => {
  return (
    <div>
     <div>
        <Image src={url} alt='image' width={500} height={500} priority />
      </div>
      <button type='button' onClick={onClick} >Delete</button>
    </div>
  )
}

export default PreviewCard