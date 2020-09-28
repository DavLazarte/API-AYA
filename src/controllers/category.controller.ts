import { Request, Response } from "express";
import Category, { ICategorySchema } from "../models/category";

export const getCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Categories = await Category.find().lean().exec();
  return res.status(200).json(Categories);
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { cateId } = req.params;
  const category = await Category.findById(cateId);
  return res.status(200).json(category);
};

export const createCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = new Category(req.body);
  await newCategory.save();
  return res.status(201).json(newCategory);
};
export const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { cateId } = req.params;
  const newCategory = req.body;
  const result = await Category.findByIdAndUpdate(cateId, newCategory);
  return res.status(200).json({ message: "Successfully updated" });
};
export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { cateId } = req.params;
  const category = (await Category.findByIdAndRemove(
    cateId
  )) as ICategorySchema;
  return res.status(200).json({ message: "Successfully deleted" });
};
