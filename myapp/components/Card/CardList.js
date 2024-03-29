'use client'
import { deletePost } from '@/lib/action'
import React from 'react'
import PolaroidCard from './PolaroidCard'

const CardList =  ({posts}) => {
    async function handleDeletePost(public_id) {
        const res = await deletePost(public_id.toString()); 
        console.log(res); 
    }

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 p-8 items-center justify-center'>
            {posts.map(post => (
        <div key={post._id}>
            <PolaroidCard
                imageUrl={post.secure_url}
                title={post.title}
                description={post.description}
                key={post?.public_id}
                url={post?.secure_url}
                onClick={() => handleDeletePost(post?.public_id)}
            />
        </div>
    ))}
   </div>
  )
}

export default CardList