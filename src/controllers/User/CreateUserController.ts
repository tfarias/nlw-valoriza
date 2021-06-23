import { Response, Request } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, admin });
    return response.json(user);
  }
}

export default new CreateUserController();
