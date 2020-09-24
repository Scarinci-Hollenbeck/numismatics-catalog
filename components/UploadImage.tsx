import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload'
import { useDropzone } from 'react-dropzone'

export default function UploadImage(): JSX.Element {
  const onDrop = (photos) => {}

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
