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

const BaconUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  profession: z.string(),
});

const MessageHtmlTemplate = `
<h2>Message From Website</h2>

<p><strong>Name:</strong> {{ firstName }} {{ lastName }}</p>
<p><strong>Email:</strong> {{ email }}</p>  
<p><strong>Phone:</strong> {{ phone }}</p> 
<p><strong>Message:</strong> {{ message }}</p> 
`;

const BaconUpHtmlTemplate = `
<h2>New <strong>Bacon United Club</strong> member</h2>

<p><strong>Name:</strong> {{ name }}</p>
<p><strong>Email:</strong> {{ email }}</p>  
<p><strong>Profession:</strong> {{ profession }}</p> 
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
    const passedData = MessageSchema.parse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    let finalHTML = MessageHtmlTemplate.replace(
      '{{ firstName }}',
      passedData.firstName
    )
      .replace('{{ lastName }}', passedData.lastName)
      .replace('{{ email }}', passedData.email)
      .replace('{{ phone }}', passedData.phone)
      .replace('{{ message }}', passedData.message);

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

export async function joinBaconUnited(formData: FormData) {
  try {
    const passedData = BaconUpSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      profession: formData.get('profession'),
    });

    let finalHTML = BaconUpHtmlTemplate.replace('{{ name }}', passedData.name)
      .replace('{{ email }}', passedData.email)
      .replace('{{ profession }}', passedData.profession);

    const info = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `${passedData.name} Registered for Bacon United`,
      html: finalHTML,
    });

    console.log('Email %s delivered successfully!', info.messageId);
  } catch (error) {
    console.error('Error:', error);
  }
}
