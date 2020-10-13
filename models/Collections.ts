import mongoose, { Schema, Document } from 'mongoose';

const CollectionsSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  created_at: { type: Date, required: true, default: Date.now }
});

export interface ICollections extends Document {
  title: string,
  created_at: Date;
}

export default mongoose.models.Collections
  || mongoose.model('Collections', CollectionsSchema);
