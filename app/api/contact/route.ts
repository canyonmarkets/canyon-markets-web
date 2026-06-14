import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
  }

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);

  const { firstName, lastName, email, company, location, headcount, details, source } = await req.json();

  const { error } = await resend.emails.send({
    from: 'Canyon Markets <noreply@canyon-markets.com>',
    to: 'info@canyon-markets.com',
    replyTo: email,
    subject: `New Break Room Assessment Request — ${company}${source ? ` (${source})` : ''}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Location: ${location}`,
      `Headcount: ${headcount}`,
      `Lead source: ${source || 'home'}`,
      ``,
      `Break Room Details:`,
      details,
    ].join('\n'),
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
