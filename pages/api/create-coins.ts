import dbConnect from '../../utils/db-connect';
import Coins from '../../models/Coins';

export default async function handler(req, res) {
  await dbConnect();

  if(req.method === 'POST') {
    try {
      const results = JSON.parse(req.body);
      const newCoin = await Coins.create(results);
      res.status(201).json({ status: 201, data: newCoin });
    } catch (error) {
      console.error(error);
      res.status(400).json({ status: 400, error });
    }
  }  
}

