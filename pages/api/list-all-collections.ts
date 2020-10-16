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
      const listAllCollections: Array<ICollectionCoinCount> = await CollectionCoinCount.find({});

      res.status(200).json({ status: 200, data: listAllCollections.map((item) => {
        return {
          id: item.categoryId,
          title: item.categoryTitle,
          count: item.count
        }
      })});
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
