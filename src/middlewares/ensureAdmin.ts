import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepositoty = getCustomRepository(UserRepository);
  const { admin } = await userRepositoty.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({ error: "Unauthorized" });
}
