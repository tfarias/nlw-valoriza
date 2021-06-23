import { Router } from "express";
import CreateTagController from "./controllers/Tag/CreateTagController";
import CreateUserController from "./controllers/User/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

router.post("/user", CreateUserController.handle);
router.post("/tag", ensureAdmin, CreateTagController.handle);
export { router };
