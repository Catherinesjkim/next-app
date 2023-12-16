'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && 
        <CldImage src={publicId} width={270} height={180} alt="A Biskky Logo" />}
      <CldUploadWidget
        uploadPreset='qgtznq5h'
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#10173a",
              sourceBg: "#20304b",
              windowBorder: "#7171D0",
              tabIcon: "#79F7FF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#CCE8FF",
              link: "#72F1FF",
              action: "#5333FF",
              inProgress: "#00ffcc",
              complete: "#33ff00",
              error: "#cc3333",
              textDark: "#000000",
              textLight: "#ffffff"
          },
          fonts: {
              default: null,
              "'IBM Plex Sans', sans-serif": {
                  url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
                  active: true
              }
          }
        }}}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}>
        {({ open }) => 
          <button 
            className='btn btn-primary'
            onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage