import { Schema, model, Document } from "mongoose";

export interface ILocation extends Document {
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
export interface ICategory extends Document {
  name: string;
  description: string;
  subcategory: string;
  state: boolean;
}
export interface IEntity extends Document {
  name: string;
  location: ILocation;
  contact: IContact;
  imagePath: string;
  category: ICategory;
  businesshours: string;
  state: boolean;
}
const contactSchema = new Schema({
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

const locationSchema = new Schema({
  address: { type: String, required: true },
  locality: { type: String },
  city: { type: String, required: true },
  province: { type: String, required: true },
  zipcode: { type: String, required: true },
  latitud: { type: String },
  longitud: { type: String },
  country: { type: String, required: true },
});
const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  subcategory: { type: String },
  state: { type: Boolean },
});

const EntitySchema = new Schema({
  name: { type: String, required: true },
  location: locationSchema,
  contact: contactSchema,
  imagePath: { type: String },
  category: [categorySchema],
  businessHours: { type: String },
  state: { type: Boolean },
  created_at: { type: Date, default: Date.now },
});

export default model<IEntity>("Entity", EntitySchema);
