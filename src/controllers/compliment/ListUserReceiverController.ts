import { Request, Response } from "express";
import { ListUserReceiverService } from "../../services/Compliment/ListUserReceiverService";

class ListUserReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiverService = new ListUserReceiverService();

    const compliments = await listUserReceiverService.execute(user_id);

    return response.json(compliments);
  }
}

export default new ListUserReceiverController();
