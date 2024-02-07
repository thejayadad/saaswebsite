'use client'
import Progress from '@/components/Progress'
import React from 'react'

const loading = () => {
  return (
    <div
    className='flex min-h-screen flex-col justify-center items-center text-4xl'
    >
    <Progress />
    </div>
  )
}

export default loading