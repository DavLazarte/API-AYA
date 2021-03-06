import { Request, Response } from "express";
import Entity, { IEntity } from "../models/entity";
import config from "../config/config";

export const getEntities = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Entities = await Entity.find().lean().exec();
  return res.status(200).json(Entities);
};

export const getEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { entId } = req.params;
  const entity = await Entity.findById(entId);
  return res.status(200).json(entity);
};
export const getEntityHigh = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Entities = await Entity.find({destacada:true}).lean().exec();
  return res.status(200).json(Entities);
};


export const createEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  req.setTimeout(500000)
  const newEntity = new Entity(req.body);
  await newEntity.save();
  return res.status(201).json(newEntity);
};

export const updateEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { entId } = req.params;
  const newEntity = req.body;
  const result = await Entity.findByIdAndUpdate(entId, newEntity);
  return res.status(200).json({ message: "Successfully updated" });
};
export const deleteEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { entId } = req.params;
  const entity = (await Entity.findByIdAndRemove(entId)) as IEntity;
  return res.status(200).json({ message: "Successfully deleted" });
};
//funciones para obtener los locales de salud,servicios y gastronomia
export const getSalud = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Entities = await Entity.find({categories:{$all:["salud"]}}).lean().exec();
  return res.status(200).json(Entities);
};
export const getAllGastronomy = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Entities = await Entity.find({categories:{$all:["gastronomia"]}}).lean().exec();
  return res.status(200).json(Entities);
};
export const getAllServices = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Entities = await Entity.find({categories:{$all:["services"]}}).lean().exec();
  return res.status(200).json(Entities);
};