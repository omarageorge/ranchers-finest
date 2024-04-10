'use server';

import { createTransport } from 'nodemailer';
import { z } from 'zod';

const EMAIL_SENDER = 'Ranchers Finest "<website@ranchersfinest.net>"';

const MessageSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

const htmlTemplate = `
<h2>Message From Website</h2>

<p><strong>Name:</strong> {{ firstName }} {{ lastName }}</p>
<p><strong>Email:</strong> {{ email }}</p>  
<p><strong>Phone:</strong> {{ phone }}</p> 
<p><strong>Message:</strong> {{ message }}</p> 
`;

const transporter = createTransport({
  //@ts-ignore
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendMessage(formData: FormData) {
  try {
    // Validate and extract message data
    const passedData = MessageSchema.parse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    // Populate the HTML template
    let finalHTML = htmlTemplate
      .replace('{{ firstName }}', passedData.firstName)
      .replace('{{ lastName }}', passedData.lastName)
      .replace('{{ email }}', passedData.email)
      .replace('{{ phone }}', passedData.phone)
      .replace('{{ message }}', passedData.message);

    // Send the email
    const info = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: process.env.EMAIL_RECIPIENT,
      subject: passedData.subject,
      html: finalHTML,
    });

    console.log('Email %s delivered successfully!', info.messageId);
  } catch (error) {
    console.error('Error:', error);
  }
}
