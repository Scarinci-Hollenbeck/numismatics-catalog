import mongoose, { Schema, Document } from 'mongoose';
import { ICollections } from './Collections';

const CollectionCoinCountSchema: Schema = new Schema({
  categoryTitle: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId },
  count: { type: Number, required: true },
  updated_at: { type: Date, required: true, default: Date.now },
});

export interface ICollectionCoinCount extends Document {
  categoryTitle: ICollections['title']
  categoryId: ICollections['_id']
  count: number
  updated_at: Date
}

export default mongoose.models.CollectionCoinCount
  || mongoose.model<ICollectionCoinCount>(
    'CollectionCoinCount',
    CollectionCoinCountSchema,
  );
