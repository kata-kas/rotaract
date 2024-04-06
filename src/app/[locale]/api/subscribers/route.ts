import { Subscriber } from '@/types/subscriber';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, phonenumber }: Partial<Subscriber> = await req.json();

  if (!name || !email || !phonenumber) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const createdOn = new Date();
  const {rows} = await sql`
    INSERT INTO subscribers (name, email, phoneNumber, isSubscriber, createdOn)
    VALUES (${name}, ${email}, ${phonenumber}, true, ${createdOn.toISOString()})
  `;
  return NextResponse.json(rows);
}

export async function GET() {
  const {rows} = await sql`SELECT * FROM subscribers`;
  return NextResponse.json(rows);
}
