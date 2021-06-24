import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email incorrect");
    }
    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const user = userRepository.create({
      name,
      email,
      admin,
      password,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
