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
      const existingCollection: Array<ICollections> = await Collections.find({
        title: results.category,
      }).limit(1);

      if (existingCollection.length > 0) {
        res.status(200).json({
          status: 200,
          newCollection: false,
          data: existingCollection[0]._id,
        });
      } else {
        const newCollection: ICollections = await new Collections({
          title: results.category,
        }).save();
        res
          .status(201)
          .json({ status: 201, newCollection: true, data: newCollection._id });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
