import { Request, Response } from 'express'
import Farmacia, { IFarmaSchema } from '../models/farmacia'
import config from '../config/config'

export const getFarmacias = async (req: Request, res: Response): Promise<Response> => {
    const Farmacias = await Farmacia.find().lean().exec()
    return res.status(200).json(Farmacias)
}

export const getFarmacia = async (req: Request, res: Response): Promise<Response> => {
    const { farmId } = req.params;
    const farmacia = await Farmacia.findById(farmId)
    return res.status(200).json(farmacia)
}

export const createFarmacia = async (req: Request, res: Response): Promise<Response> => {
    const newFarmacia = new Farmacia(req.body)
    await newFarmacia.save();
    return res.status(201).json(newFarmacia)
}

export const updateFarmacia = async (req: Request, res: Response): Promise<Response> => {
    const { farmId } = req.params;
    const newFarmacia = req.body;
    const result = await Farmacia.findByIdAndUpdate(farmId, newFarmacia)
    return res.status(200).json({ message: 'Successfully updated' })
}
export const deleteFarmacia = async (req: Request, res: Response): Promise<Response> => {
    const { farmId } = req.params;
    const farmacia = await Farmacia.findByIdAndRemove(farmId) as IFarmaSchema
    return res.status(200).json({ message: 'Successfully deleted' })
}
