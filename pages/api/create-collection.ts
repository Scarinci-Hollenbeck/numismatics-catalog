import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Collections, { ICollections } from '../../models/Collections';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const results = JSON.parse(req.body);
      const { category } = results;
      const currentCollection: ICollections = await Collections.findOne({
        title: category,
      });

      if (!currentCollection) {
        const newCollection: ICollections = await new Collections({
          title: category,
        }).save();
        res.status(201).json({
          status: 201,
          newCollection: true,
          data: {
            id: newCollection._id,
            title: newCollection.title,
          },
        });
      }

      if (currentCollection) {
        res.status(201).json({
          status: 201,
          newCollection: false,
          data: {
            id: currentCollection._id,
            title: currentCollection.title,
          },
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
