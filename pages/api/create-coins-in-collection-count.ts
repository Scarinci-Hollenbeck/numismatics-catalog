import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import CollectionCoinCount, { ICollectionCoinCount } from '../../models/CollectionCoinCount';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const queries = JSON.parse(req.body);
      const { categoryId, categoryTitle } = queries;
      const currentCoinCount: ICollectionCoinCount = await CollectionCoinCount.findOne({ categoryId });

      // if the coin count document doesn't exist -- create it
      if (!currentCoinCount) {
       const newCollectionCoinCount = await new CollectionCoinCount({
          categoryId,
          categoryTitle,
          count: 1
        }).save();

        res.status(201).json({ status: 201, data: newCollectionCoinCount });
      }    

      // if it exists then get its current count and update its count
      if (currentCoinCount) {
        const count = currentCoinCount.count += 1;
        currentCoinCount.count = count;
        await currentCoinCount.save();

        res.status(201).json({ status: 201, data: currentCoinCount });
      }

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
