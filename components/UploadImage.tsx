import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { useDropzone } from 'react-dropzone';

const upload = require('superagent');

function bytesToSize(bytes: number) {
  const sizes: Array<string> = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
}

export default function UploadImage() : JSX.Element {
  // user swr to send a post request
  // with photo data from react dropzone
  
  const onDrop = (photos) => {
    const req = upload.post(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL);
    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    photos.forEach((photo) => {
      req.field('sign_url', true).field('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET).field('file', photo);
    });

    req.end((err, res) => {
      if(err) {
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxSize: 1000000,
    multiple: true,
    accept: '.png,.jpg,.jpeg,.gif',
    onDrop
  });

  return (
    <>
      <div {...getRootProps({ className: 'coin-upload' })}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faUpload} />
        <p> Upload All Coin Images</p>
      </div>
    </>
  );
}
