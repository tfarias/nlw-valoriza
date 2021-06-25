import { getCustomRepository } from "typeorm";
import Mail from "../../lib/Mail";
import { ComplimentRepository } from "../../repositories/ComplimentRepository";

class SendComplimentService {
  async sendEmail(compliment_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const compliment = await complimentRepository.findOne({
      where: {
        id: compliment_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    const receiver = compliment.userReceiver;
    const sender = compliment.userSender;
    const tag = compliment.tag;

    try {
      Mail.sendMail({
        to: `${receiver.name} <${receiver.email}>`,
        subject: "Novo elogio recebido",
        template: "compliment",
        context: {
          receiver: receiver.name,
          sender: sender.name,
          elogio: compliment.message,
          tag: tag.name,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SendComplimentService();
