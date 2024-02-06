'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import PreviewCard from '../Card/PreviewCard';

const UploadForm = () => {
    const formRef = useRef();
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleInputFiles(e) {
        const file = e.target.files[0]; 
        if (file && file.size < 1024 * 1024 && file.type.startsWith('image/')) {
            setFile(file); 
            const fileUrl = URL.createObjectURL(file); // Create file URL
            console.log("fileUrl " + fileUrl);
        } else {
            alert('Please select a valid image file (less than 1MB)');
            e.target.value = ''; 
        }
    }

    return (
        <>
            <form action='' ref={formRef}>
                <div>
                    <input type='file' accept='image/*' onChange={handleInputFiles} />
                    {file && <PreviewCard url={URL.createObjectURL(file)} />} 
                </div>
            </form>
        </>
    );
};

export default UploadForm;
