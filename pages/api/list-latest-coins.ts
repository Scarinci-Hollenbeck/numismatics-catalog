import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const allCoins: Array<ICoins> = await Coins.find({})
        .limit(10)
        .sort([['created_at', -1]]);

      res.status(200).json({ status: 200, data: allCoins });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
