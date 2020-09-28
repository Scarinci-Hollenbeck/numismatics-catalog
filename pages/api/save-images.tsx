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
          : '',
        category: response.image_metadata.XPSubject
          ? response.image_metadata.XPSubject
          : '',
        description: response.image_metadata.XPComment
          ? response.image_metadata.XPComment
          : '',
        imageUrl: response.url ? response.url : '',
      };

      res.status(201).json({ status: 201, data: results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
};
