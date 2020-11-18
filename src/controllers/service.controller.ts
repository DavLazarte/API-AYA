import { Request, Response } from "express";
import Service, { IServices } from "../models/services";
// import config from "../config/config";

export const getServices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Services = await Service.find().lean().exec();
  return res.status(200).json(Services);
};

export const getService = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { servId } = req.params;
  const service = await Service.findById(servId);
  return res.status(200).json(service);
};

export const createService = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newService = new Service(req.body);
  await newService.save();
  return res.status(201).json(newService);
};

export const updateService = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { servId } = req.params;
  const newService = req.body;
  const result = await Service.findByIdAndUpdate(servId, newService);
  return res.status(200).json({ message: "Successfully updated" });
};
export const deleteService = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { servId } = req.params;
  const service = (await Service.findByIdAndRemove(servId)) as IServices;
  return res.status(200).json({ message: "Successfully deleted" });
};
