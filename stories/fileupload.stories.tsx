import React from 'react';
import UploadSpreadsheet from '../components/UploadSpreadsheet';
import UploadImage from '../components/UploadImage';
import '../styles/coin-upload.scss';

export default { title: 'File Uploading' };


export const UploadForm = () => <UploadSpreadsheet />;
export const ImageUploader = () => <UploadImage />;
