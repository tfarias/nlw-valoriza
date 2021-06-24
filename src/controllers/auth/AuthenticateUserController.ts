import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/User/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticaService = new AuthenticateUserService();

    const token = await authenticaService.execute({
      email,
      password,
    });

    return response.json({ token });
  }
}

export default new AuthenticateUserController();
