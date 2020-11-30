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

export interface IServices extends Document {
  name: string;
  description: string;
  location: ILocation;
  contact: IContact;
  imagePath: string;
  categories: [];
  subcategories: [];
  businesshours: string;
  destacada: boolean;
  state: boolean;
}
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
const contactSchema = new Schema({
    cellphone: { type: String, required: true },
    telephone: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    web: { type: String },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  });
// const categorySchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   subcategory: { type: String },
//   state: { type: Boolean },
// });

const ServicesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: locationSchema,
  contact: contactSchema,
  imagePath: { type: String },
  categories: {type: Array, required: true},
  subcategories: {type: Array, required: true},
  businessHours: { type: String },
  destacada: { type: Boolean },
  state: { type: Boolean },
  created_at: { type: Date, default: Date.now },
});

export default model<IServices>("Service", ServicesSchema);
