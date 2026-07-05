import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — lead cannot be emailed');
    return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);
  const company = str(body.company);
  const location = str(body.location);
  const headcount = str(body.headcount);
  const details = str(body.details);
  const source = str(body.source);

  if (!firstName || !lastName || !email || !company || !details || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
  }

  const leadText = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Location: ${location}`,
    `Headcount: ${headcount}`,
    `Lead source: ${source || 'home'}`,
    ``,
    `Break Room Details:`,
    details,
  ].join('\n');

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: 'Canyon Markets <noreply@canyon-markets.com>',
    to: 'info@canyon-markets.com',
    replyTo: email,
    subject: `New Break Room Assessment Request — ${company}${source ? ` (${source})` : ''}`,
    text: leadText,
  });

  if (error) {
    // Log the full lead so it is recoverable from Netlify function logs even if the email fails.
    console.error('[contact] Resend send failed — LEAD DATA FOLLOWS:\n' + leadText, error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
