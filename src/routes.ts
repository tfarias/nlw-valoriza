import { Router } from "express";
import CreateUserController from "./controllers/User/CreateUserController";

const router = Router();

router.post("/user", CreateUserController.handle)
export { router };