import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Coins from '../../models/Coins';
import Collections from '../../models/Collections';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      await Collections.findByIdAndDelete(req.body._id);
      await Coins.deleteMany({ categoryId: req.body._id });

      res.status(200).json({
        status: 200,
        message: `collection with id ${req.body._id} has been successfully deleted along with it's coins.`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
