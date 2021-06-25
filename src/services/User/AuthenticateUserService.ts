import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { sign } from "jsonwebtoken";

interface IAuthencicateRequest {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthencicateRequest) {
    const userRepositoty = getCustomRepository(UserRepository);

    const user = await userRepositoty.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.APP_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
