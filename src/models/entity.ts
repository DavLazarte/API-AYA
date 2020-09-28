import { Schema, model, Document } from "mongoose";
import { ICategorySchema } from "../models/category";

export interface ILoca extends Document {
  address?: string;
  locality: string;
  city: string;
  province: string;
  zipcode: string;
  latitud: string;
  longitud: string;
  country: string;
}
export interface IContact extends Document {
  cellphone?: string;
  telephone: string;
  facebook: string;
  instagram: string;
  web: string;
  email: string;
}

export interface IEntity extends Document {
  name: string;
  location: ILoca;
  contact: IContact;
  imagePath: string;
  category: ICategorySchema["_id"];
  businesshours: string;
  state: boolean;
}
const contacSchema = new Schema({
  cellphone: { type: String, required: true },
  telephone: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  web: { type: String },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
});

const locaSchema = new Schema({
  address: { type: String, required: true },
  locality: { type: String },
  city: { type: String, required: true },
  province: { type: String, required: true },
  zipcode: { type: String, required: true },
  latitud: { type: String },
  longitud: { type: String },
  country: { type: String, required: true },
});

const EntitySchema = new Schema({
  name: { type: String, required: true },
  location: locaSchema,
  contact: contacSchema,
  imagePath: { type: String },
  category: { type: Schema.Types.ObjectId, required: true },
  businessHours: { type: String },
  state: { type: Boolean },
  created_at: { type: Date, default: Date.now },
});

export default model<IEntity>("Entity", EntitySchema);
