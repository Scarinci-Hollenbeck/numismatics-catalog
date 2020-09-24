import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload'
import { useDropzone } from 'react-dropzone'
import { postFetcher } from '../utils/helpers'

export default function UploadImage(): JSX.Element {
  const onDrop = (photos) => {
    // loop through photos and format them for upload
    photos.forEach((photo) => formatPhotoForUpload(photo))
  }

  const formatPhotoForUpload = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = async () => {
      const request = await postFetcher('/api/save-images', reader.result)
      console.log(request)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxSize: 1000000,
    multiple: true,
    accept: '.png,.jpg,.jpeg,.gif',
    onDrop,
  })

  return (
    <>
      <div {...getRootProps({ className: 'coin-upload' })}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faUpload} />
        <p> Upload All Coin Images</p>
      </div>
    </>
  )
}
