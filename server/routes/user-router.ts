import { Router } from "express";
import * as UserController from "../controllers/user-controller";

export default function Announcement() {
  const router = Router();

  router.get("/get-all", UserController.usersGetAll);

  return router;
}
