import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import CollectionCoinCount, { ICollectionCoinCount } from '../../models/CollectionCoinCount';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      /** TODO: delete collections & coins and re added them so the CollectionCoinCount database is properly updated
       *  TODO: then make a single query for the CollectionCoinCount collection and server that up
       * 
       */

      res.status(200).json({ status: 200, data: [] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
