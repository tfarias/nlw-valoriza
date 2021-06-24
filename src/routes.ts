import { Router } from "express";
import AuthenticateUserController from "./controllers/auth/AuthenticateUserController";
import CreateComplimentController from "./controllers/compliment/CreateComplimentController";
import CreateTagController from "./controllers/Tag/CreateTagController";
import CreateUserController from "./controllers/User/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

router.post("/user", CreateUserController.handle);
router.post("/tag", ensureAdmin, CreateTagController.handle);
router.post("/login", AuthenticateUserController.handle);
router.post("/compliment", CreateComplimentController.handle);

export { router };
