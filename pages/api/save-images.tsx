import { NextApiRequest, NextApiResponse } from 'next';
import { cloudinary } from '../../utils/cloudinary';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const fileStr = req.body;
      const response = await cloudinary.uploader.upload(fileStr, {
        upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET,
        image_metadata: true,
      });

      const results = {
        title: response.image_metadata.XPTitle
          ? response.image_metadata.XPTitle
          : 'No title available',
        category: response.image_metadata.XPSubject
          ? response.image_metadata.XPSubject
          : 'No category available',
        description: response.image_metadata.XPComment
          ? response.image_metadata.XPComment
          : 'No description available',
        imageUrl: response.url ? response.url : 'https://dummyimage.com/600x400/e9e9e9/241f24&text=No+Image+Found',
      };

      res.status(201).json({ status: 201, data: results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
};
