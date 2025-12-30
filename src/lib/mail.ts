import nodemailer from 'nodemailer';
import fa from 'zod/v4/locales/fa.js';

export async function getMailClient() {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
          user: account.user,
          pass: account.pass,
      },
  });

  return transporter;
}