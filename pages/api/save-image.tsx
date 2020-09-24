import { cloudinary } from '../../utils/cloudinary'

export default (req, res) => {
  if (req.method === 'POST') {
    try {
      const fileStr = req.body

      res
        .status(201)
        .json({ message: 'Photo successfuly uploaded!', data: req.body })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
    }
  }
}
