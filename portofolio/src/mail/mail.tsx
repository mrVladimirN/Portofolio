import { EmailSubscription } from "./SubscriptionEmailTemplate";
import { render } from "@react-email/render";
const nodemailer = require("nodemailer");

export const sendSubscriptionEmail = (
  email: string,
  name: string,
  uuid: string
) => {
  // Create the transporter with the required configuration for Outlook
  // change the user and pass !
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const emailHtml = render(
    <EmailSubscription email={email} name={name} uuid={uuid} />
  );
  // setup e-mail data, even with unicode symbols
  const mailOptions = {
    from: '"Vladimir Nitu" <vladimir.nitu.business@outlook.com>', // sender address (who sends)
    to: email, // list of receivers (who receives)
    subject: `👋 Welcome to Vladimirs's NewsLetter `, // Subject line

    html: emailHtml, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(
    mailOptions,
    function (error: any, info: { response: string }) {
      console.log(info);
      if (error) {
        return console.log(error);
      }

      console.log("Message sent: " + info.response);
    }
  );
};
