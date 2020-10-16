import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';
import CollectionCoinCount, {
  ICollectionCoinCount,
} from '../../models/CollectionCoinCount';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // update collection count
      const coinData: ICoins = await Coins.findById(req.body);
      const currentCoinCount: ICollectionCoinCount = await CollectionCoinCount.findOne(
        { categoryTitle: coinData.category },
      );
      const count = (currentCoinCount.count -= 1);

      currentCoinCount.count = count;
      await currentCoinCount.save();
      await Coins.findByIdAndDelete(req.body);

      res.status(200).json({
        status: 200,
        message: `A coin with the id ${req.body} was successfully deleted!`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error });
    }
  }
}
