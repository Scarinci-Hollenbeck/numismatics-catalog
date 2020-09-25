import mongoose, { Schema, Document } from 'mongoose';

const CollectionsSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
});

export interface ICollections extends Document {
  title: string;  
};


export default mongoose.models.Collections || mongoose.model('Collections', CollectionsSchema)