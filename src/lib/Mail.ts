import nodemailer from "nodemailer";
import { resolve } from "path";
import exphbs from "express-handlebars";
import nodemailerhbs from "nodemailer-express-handlebars";
import mailConfig from "../config/mail";

class Mail {
  transporter: any;
  constructor() {
    const config = mailConfig;

    this.transporter = nodemailer.createTransport({
      service: "mailtrap",
      host: config.host,
      port: +config.port,
      secure: config.secure,
      auth: config.auth,
    });

    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, "..", "views", "emails");

    this.transporter.use(
      "compile",
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, "layouts"),
          partialsDir: resolve(viewPath, "partials"),
          defaultLayout: "default",
          extname: ".hbs",
        }),
        viewPath,
        extName: ".hbs",
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
