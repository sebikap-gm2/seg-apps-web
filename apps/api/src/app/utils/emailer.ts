import * as nodemailer from 'nodemailer'

const SMTPConfig = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cd6a0be6218c6e",
    pass: "bf008616020606"
  }
}

const BaseMailConfig = {
  from: 'segappswebgrupo@gmail.com',
}

const RecoverMailConfig = (newPass: string) => ({
  ...BaseMailConfig,
  subject: 'Password Recovery',
  // text: 'That was easy!',
  html: `
    <h1>Password Recovery</h1>
    <p>A new password has been generated for you: ${newPass}</p>
  `
});

export class Emailer {
  transporter: any
  constructor() {
    this.transporter = nodemailer.createTransport(SMTPConfig);
  }

  async sendRecoverMail(to: string, newPass: string) {
    const res = await this.transporter.sendMail({ ...RecoverMailConfig(newPass), to });
    return Boolean(res)
  }
}
