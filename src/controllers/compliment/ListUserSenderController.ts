import { Request, Response } from "express";
import { ListUserSenderService } from "../../services/Compliment/ListUserSenderService";

class ListUserSenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSenderService = new ListUserSenderService();

    const compliments = await listUserSenderService.execute(user_id);

    return response.json(compliments);
  }
}

export default new ListUserSenderController();
