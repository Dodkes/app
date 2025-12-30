import { NextFunction, Response, Request } from "express";
import * as UserService from "../services/user-service";

export const usersGetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await UserService.usersGetAll();
    res.json({ data, message: "List of users" });
  } catch (error) {
    next(error);
  }
};
