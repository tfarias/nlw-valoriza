import { Response, Request } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();
    try {
      const user = await createUserService.execute({ name, email, admin }).then();
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }

  }
}

export default new CreateUserController;