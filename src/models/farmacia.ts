import { Schema, model, Document } from 'mongoose';

export interface IUbiSchema extends Document {
    calle?: string;
    localidad: string;
    provincia: string;
    zip: string;
    latitud: string;
    longitud: string;
    pais: string;

}
export interface IContact extends Document {
    celular?: string,
    fijo: string,
    facebook: string,
    instagram: string,
    web: string,
    email: string,
}

export interface IFarmaSchema extends Document {
    nombre: string;
    ubicacion: IUbiSchema;
    contacto: IContact;
    imagePath: string,
    turno: number,
    estado: boolean,
}
const contacSchema = new Schema({
    celular: { type: String, required: true },
    fijo: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    web: { type: String },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    }
})

const ubiSchema = new Schema({
    calle: { type: String, required: true },
    localidad: { type: String, required: true },
    provincia: { type: String, required: true },
    zip: { type: String, required: true },
    latitud: { type: String },
    longitud: { type: String },
    pais: { type: String, required: true }
})

const FarmaSchema = new Schema({
    nombre: { type: String, required: true },
    ubicacion: ubiSchema,
    contacto: contacSchema,
    imagePath: { type: String },
    turno: { type: Number, required: true },
    estado: { type: Boolean },
    created_at: { type: Date, default: Date.now }
});

export default model<IFarmaSchema>('Farmacia', FarmaSchema)