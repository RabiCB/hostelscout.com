"use client"

import React, { useState ,useRef} from 'react';
import { Client, Storage ,ID} from "appwrite";
import {MdPhotoSizeSelectActual} from "react-icons/md"
const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<any>(null);


  const ref=useRef<HTMLInputElement>(null)

  const popup=()=>{
    ref.current?.click()
  }


  const handleImageChange = (e:any) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
    console.log(imageFile)
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
   const file= reader.readAsDataURL(imageFile);
    console.log("fff",file)
  };

  const handleImageUpload = () => {
    const formData = new FormData();
   const ccc= formData.append('image', selectedImage);
   console.log("ccc",ccc)

  

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('647b1d99a6be71182293');

const storage = new Storage(client);

const promise = storage.createFile(
    '6484a03e93323fbc080a',
    ID.unique(),
    selectedImage,
   
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
            

  

    
  };

  return (
    <div >
      <div className='flex items-center justify-center flex-col gap-1 cursor-pointer'>
      <MdPhotoSizeSelectActual onClick={popup}  size={24}/>
      {previewImage ?<span>selected</span>:<span>selected</span>}

      </div>
       
      <input type="file" className='hidden' ref={ref} accept="image/*" onChange={handleImageChange} />
      <div className='flex items-center jusify-center my-2 flex-col relative'>
      {previewImage && (
        <img src={previewImage} className='rounded-md ' alt="Preview" style={{ maxWidth: '260px' }} />
      )}
     
      </div>
      {selectedImage && (
        <button className='absolute bg-blue-600 rounded-md px-2 py-1 text-white right-6 cursor-pointer bottom-2' onClick={handleImageUpload}>Upload</button>
      )}
    </div>
  );
};

export default ImageUpload;
