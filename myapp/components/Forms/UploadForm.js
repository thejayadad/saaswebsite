'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import PreviewCard from '../Card/PreviewCard';
import SubmitButton from '../Buttons/SubmitButton';
import { createPost } from '@/lib/action';
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

const UploadForm = () => {
    const formRef = useRef();
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size < 1024 * 1024 && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
        } else {
            alert('Please select a valid image file (less than 1MB)');
            e.target.value = '';
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        if (selectedFile && selectedFile.size < 1024 * 1024 && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
        } else {
            alert('Please select a valid image file (less than 1MB)');
        }
    }

    const deleteImage = () => {
        setFile(null);
        formRef.current.reset();
    }

    const handleUpload = async (e) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file); // Append the selected file
        formData.append('description', description); // Append the description

        const res = await createPost(formData);
        if (res?.errMsg) {
            alert(`Error: ${res?.errMsg}`);
        } else {
            alert('Post created successfully');
            setFile(null);
            setTitle(''); // Reset the title state
            setDescription('');
            formRef.current.reset();
        }
    }

    return (
        <form
            className='flex flex-col gap-12 cursor-pointer'
            onSubmit={handleUpload} ref={formRef}
            onDragOver={handleDragOver} onDrop={handleDrop}>
            <div>
                <div className='mb-6'>
                    <Input
                    className='cursor-pointer'
                    type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                </div>
                <div className='mb-6'>
                    <Textarea 
                    className='cursor-pointer'
                    value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
                </div>
                <div className=''>
                    <label htmlFor='fileUpload' className='cursor-pointer'>
                        <Input type='text'
                        placeholder='Upload Image' readOnly className='cursor-pointer px-4 py-2 w-[80] rounded-full' />
                        <input id='fileUpload' type='file' accept='image/*' onChange={handleFileInput} className='hidden' />
                    </label>
                </div>
                {file && <PreviewCard url={URL.createObjectURL(file)} onClick={deleteImage} />}
            </div>
            <SubmitButton value='Create Post' />
        </form>
    );
}

export default UploadForm;
