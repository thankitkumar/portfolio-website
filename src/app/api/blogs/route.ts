
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import type { BlogPost } from '@/types';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME || 'portfolioDB'); // Fallback DB name

    const posts = await db
      .collection<BlogPost>('blogs') // Assuming your collection is named 'blogs'
      .find({})
      .sort({ date: -1 }) // Sort by date descending
      .toArray();

    // Convert ObjectId to string and Date to ISO string for serialization
    const serializedPosts = posts.map(post => ({
      ...post,
      _id: post._id.toString(),
      date: post.date instanceof Date ? post.date.toISOString() : post.date.toString(),
    }));

    return NextResponse.json(serializedPosts);
  } catch (e) {
    console.error('API Error fetching blogs:', e);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
