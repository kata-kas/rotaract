import { Subscriber } from '@/types/subscriber';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, phoneNumber }: Partial<Subscriber> = await req.json();

  if (!name || !email || !phoneNumber) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const createdOn = new Date();
  const {rows} = await sql`
    INSERT INTO subscribers (name, email, phoneNumber, isSubscriber, createdOn)
    VALUES (${name}, ${email}, ${phoneNumber}, true, ${createdOn.toISOString()})
  `;
  return NextResponse.json(rows);
}

export async function GET() {
  const {rows} = await sql`SELECT * FROM subscribers`;
  return NextResponse.json(rows);
}
