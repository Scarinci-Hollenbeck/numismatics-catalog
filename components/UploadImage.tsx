import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { useDropzone } from 'react-dropzone';
import { postFetcher } from '../utils/helpers';
import { ICoins } from '../models/Coins';

export default function UploadImage(): JSX.Element {
  const onDrop = (photos: any) => {
    // loop through photos and format them for upload
    photos.forEach((photo: any) => formatPhotoForUpload(photo));
  };

  const formatPhotoForUpload = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const request = await postFetcher('/api/save-images', reader.result);
      const createCollection = await postFetcher(
        '/api/create-collection',
        JSON.stringify(request.data),
      );
      const createCoins = await postFetcher(
        '/api/create-coins',
        JSON.stringify({
          ...request.data,
          categoryId: createCollection.data,
        }),
      );

      return previewUploadedPhotos(createCoins);
    };
  };

  const previewUploadedPhotos = (savedCoins: ICoins) => {
    // rip thumbs code
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 1000000,
    multiple: true,
    accept: '.png,.jpg,.jpeg,.gif',
    onDrop,
  });

  return (
    <>
      <div {...getRootProps({ className: 'coin-upload' })}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faUpload} className="upload-icon" />
        <p> Upload All Coin Images</p>
      </div>

      <style jsx>
        {`
          div {
            border: 4px dotted #015c01;
            color: #009900;
            background-color: #8bf38b;
            border-radius: 5px;
            margin-left: auto;
            margin-right: auto;
            display: block;
            max-width: 1000px;
            text-align: center;
          }

          div p {
            font-family: 'Tajawal ExtraBold';
            font-size: 2rem;
          }

          div:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
