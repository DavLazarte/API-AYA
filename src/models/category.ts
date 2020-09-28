import { Schema, model, Document } from "mongoose";

export interface ICategorySchema extends Document {
  name: string;
  description: string;
  subcategory: [];
  state: boolean;
}
const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  subcategory: { type: Array },
  state: { type: Boolean },
});

export default model<ICategorySchema>("Category", CategorySchema);
