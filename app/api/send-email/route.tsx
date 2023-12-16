import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: 'catherine@biskky.ai',
    to: 'catherinesjkim@gmail.com',
    subject: 'My First Email from my own Biskky.ai Domain!',
    react: <WelcomeTemplate name="Catherine" />
  })

  return NextResponse.json({});

}