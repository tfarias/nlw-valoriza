import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";
import { ErrorException } from "../../exceptions/ErrorException";
interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new ErrorException("Incorrect name!", 401);
    }

    const tagAlreadyExists = await tagRepository.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
