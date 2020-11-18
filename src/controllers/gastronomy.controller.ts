import { Request, Response } from "express";
import Gastronomy, { IGastronomyLocal } from "../models/gastronomy";
// import config from "../config/config";

export const getLocalsG = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const LocalsG = await Gastronomy.find().lean().exec();
  return res.status(200).json(LocalsG);
};

export const getLocalG = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { locId } = req.params;
  const localG = await Gastronomy.findById(locId);
  return res.status(200).json(localG);
};

export const createLocalG = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newLocalG = new Gastronomy(req.body);
  await newLocalG.save();
  return res.status(201).json(newLocalG);
};

export const updateLocalG = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { locId } = req.params;
  const newLocalG = req.body;
  const result = await Gastronomy.findByIdAndUpdate(locId, newLocalG);
  return res.status(200).json({ message: "Successfully updated" });
};
export const deleteLocalG = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { locId } = req.params;
  const localG = (await Gastronomy.findByIdAndRemove(locId)) as IGastronomyLocal;
  return res.status(200).json({ message: "Successfully deleted" });
};
