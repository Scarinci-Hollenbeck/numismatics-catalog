import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const results = JSON.parse(req.body);
      const {
        title, description, imageUrl, categoryId, category,
      } = results;

      const newCoin: ICoins = await new Coins({
        title,
        description,
        imageUrl,
        categoryId,
        category,
      }).save();

      res.status(201).json({ status: 201, data: results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
