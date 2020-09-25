import dbConnect from '../../utils/db-connect';
import Collections from '../../models/Collections';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const results = JSON.parse(req.body);
      const existingCollection = await Collections.find({ title: results.category }).limit(1);

      if (existingCollection.length > 0) {
        res.status(200).json({ status: 200, newCollection: false, data: existingCollection[0]._id });
      } else {
        const newCollection = await Collections.create({ title: results.category });
        res.status(200).json({ status: 200, newCollection: true, data: newCollection._id });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ status: 400, error });
    }
  }
}
