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

      if(existingCollection[0]){
        res.status(201).json({ status: 201, newCollection: true, data: existingCollection[0]._id });
      }

      if (!existingCollection[0]) {
        const newCollection: ICollections = await new Collections({ title: results.category}).save();
        res.status(201).json({ status: 201, newCollection: false, data: newCollection._id });
      }    

    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
