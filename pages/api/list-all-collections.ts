import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Collections, { ICollections } from '../../models/Collections';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const allCollections: Array<ICollections> = await Collections.find();

      res.status(200).json({ status: 200, data: allCollections });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
