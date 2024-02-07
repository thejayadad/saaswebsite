
import HeadingText from '@/components/HeadingText'
import Modals from '@/components/Modal'
import { getPosts } from '@/lib/data'
import React from 'react'

const Dashboard = async () => {
    const posts = await getPosts()
  return (
   <main className='mx-auto max-w-screen-lg p-8'>
    <HeadingText
        title='Welcome To The Memory Bank'
        description='Your digital sanctuary for cherished moments captured in pixels.'
    />
     {posts.length === 0 ? (
                <div className='flex items-center justify-center flex-col gap-6'>
                <p className="text-center mt-4 text-gray-500">Post Your First Memory.</p>
                <Modals />
                </div>
            ) : (
                <div>
                    {/* Render posts here */}
                </div>
            )}
   </main>
  )
}

export default Dashboard