import { Response, Request } from "express";
import { CreateTagService } from "../../services/Tag/CreateTagService";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTagService();
    const tag = await createTagService.execute({ name });
    return response.json(tag);
  }
}

export default new CreateTagController();
