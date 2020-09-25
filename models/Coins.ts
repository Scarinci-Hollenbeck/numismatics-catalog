import mongoose, { Schema, Document } from 'mongoose';
import { ICollections } from './Collections';

const CoinSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  category: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, required: true },
});

export interface ICoins extends Document {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  categoryId: ICollections['_id']
}

export default mongoose.models.Coins || mongoose.model<ICoins>('Coins', CoinSchema);
