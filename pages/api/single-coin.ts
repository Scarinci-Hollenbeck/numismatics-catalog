// get a single coin by id
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
      const queries = JSON.parse(req.body);
      const { _id } = queries;

      const singleCoin: Array<ICoins> = await Coins.find({ _id })
        .limit(1)
        .exec();

      res.status(200).json({ status: 201, data: singleCoin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
