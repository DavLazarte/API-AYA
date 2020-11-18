import { Schema, model, Document } from "mongoose";

export interface ILocation extends Document {
  address: string;
  locality: string;
  city: string;
  province: string;
  zipcode: string;
  latitud: string;
  longitud: string;
  country: string;
}
export interface IContact extends Document {
  cellphone: string;
  telephone: string;
  facebook: string;
  instagram: string;
  web: string;
  email: string;
}
// export interface ICategory extends Document {
//   name: string;
//   description: string;
//   subcategory: string;
//   state: boolean;
// }
export interface IFarmaSchema extends Document {
  name: string;
  location: ILocation;
  contact: IContact;
  imagePath: string;
  category:[];
  subcategory:[];
  businesshours:string;
  turno: number;
  destacado: boolean;
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

const FarmaSchema = new Schema({
  name: { type: String, required: true },
  location: locationSchema,
  contact: contactSchema,
  imagePath: { type: String, required: true },
  categories: {type: Array,required: true},
  subcategories: {type: Array},
  businessHours: { type: String },
  turno: { type: Number, required: true },
  destacada: { type: Boolean },
  state: { type: Boolean },
  created_at: { type: Date, default: Date.now },
});

export default model<IFarmaSchema>("Farmacia", FarmaSchema);
