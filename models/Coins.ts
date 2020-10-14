import mongoose, { Schema, Document } from 'mongoose';
import { ICollections } from './Collections';

const CoinSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  category: { type: String, required: true, unique: false },
  imageUrl: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, required: false },
  created_at: { type: Date, required: true, default: Date.now },
});

export interface ICoins extends Document {
  title: string
  description: string
  category: string
  imageUrl: string
  categoryId: ICollections['_id']
  created_at: Date
}

export default mongoose.models.Coins
  || mongoose.model<ICoins>('Coins', CoinSchema);
