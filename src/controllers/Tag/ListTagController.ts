import { Response, Request } from "express";
import { ListTagService } from "../../services/Tag/ListTagService";

class ListTagController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagService();
    const tags = await listTagService.execute();
    return response.json(tags);
  }
}

export default new ListTagController();
