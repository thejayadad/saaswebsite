'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import PreviewCard from '../Card/PreviewCard';
import SubmitButton from '../Buttons/SubmitButton';
import { createPost } from '@/lib/action';

const UploadForm = () => {
    const formRef = useRef();
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleFileInput(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size < 1024 * 1024 && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
        } else {
            alert('Please select a valid image file (less than 1MB)');
            e.target.value = '';
        }
    }

    function deleteImage() {
        setFile(null);
        formRef.current.reset();
    }

    async function handleUpload(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file); // Append the selected file
        formData.append('description', description); // Append the description

        const res = await createPost(formData);
        if (res?.errMsg) {
            alert(`Error: ${res?.errMsg}`);
        } else {
            alert('Post created successfully');
            setFile(null); // Reset the file state
            setTitle(''); // Reset the title state
            setDescription(''); // Reset the description state
            formRef.current.reset(); // Reset the form
        }
    }

    return (
        <form onSubmit={handleUpload} ref={formRef}>
            <div>
                <input type='file' accept='image/*' onChange={handleFileInput} />
                {file && <PreviewCard url={URL.createObjectURL(file)} onClick={deleteImage} />} 
            </div>
            <div>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
            </div>
            <div>
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
            </div>
            <SubmitButton value='Create Post' />
        </form>
    );
}

export default UploadForm;
