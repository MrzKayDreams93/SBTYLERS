import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { Redis } from '@upstash/redis';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    // Add to Notion database
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email: email },
      },
    });

    // Add to Upstash Redis
    await redis.sadd('waitlist', JSON.stringify({ name, email }));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
