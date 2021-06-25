import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";
import { classToPlain } from "class-transformer";
class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tags = await tagRepository.find({
      relations: ["compliments"],
    });

    return classToPlain(tags);
  }
}

export { ListTagService };
