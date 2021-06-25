import { Router } from "express";
import AuthenticateUserController from "./controllers/auth/AuthenticateUserController";
import CreateComplimentController from "./controllers/compliment/CreateComplimentController";
import ListUserReceiverController from "./controllers/compliment/ListUserReceiverController";
import ListUserSenderController from "./controllers/compliment/ListUserSenderController";
import CreateTagController from "./controllers/Tag/CreateTagController";
import ListTagController from "./controllers/Tag/ListTagController";
import CreateUserController from "./controllers/User/CreateUserController";
import ListUserController from "./controllers/User/ListUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/login", AuthenticateUserController.handle);
router.post("/user", CreateUserController.handle);
router.use(ensureAuthenticated);
router.get("/user", ListUserController.handle);
router.post("/tag", ensureAdmin, CreateTagController.handle);
router.get("/tag", ListTagController.handle);
router.post("/compliment", CreateComplimentController.handle);

router.get("/user/compliments/send", ListUserSenderController.handle);
router.get("/user/compliments/receive", ListUserReceiverController.handle);

export { router };
