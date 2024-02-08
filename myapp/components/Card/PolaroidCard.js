'use client'
import React, { useTransition } from 'react'
import { FaTrash } from 'react-icons/fa'; 

const PolaroidCard = ({ imageUrl, title, description, onClick }) => {
    const [isPending, startTransition] = useTransition();
    

    return (
        <div className="relative bg-gray-100 dark:bg-white dark:text-gray-700 p-4 py-8 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 h-96">
            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-end items-center p-4 bg-black bg-opacity-50 rounded-lg">
                <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
                <p className="text-white polaroid-card-description">{description}</p>
            </div>
            <button 
                type='button' 
                className="absolute top-2 right-2 text-red-700"
                onClick={() => startTransition(onClick)} 
                disabled={isPending}
            >
                {isPending ? 'Loading...' : <FaTrash />}
            </button>
        </div>
    );
};


export default PolaroidCard;
