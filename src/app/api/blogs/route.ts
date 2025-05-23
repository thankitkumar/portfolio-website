
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import type { BlogPost } from '@/types';

export async function GET() {
  console.log('/api/blogs route hit');
  try {
    const client = await clientPromise;
    const dbName = process.env.MONGODB_DB_NAME || 'portfolioDB';
    const db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);

    let posts: BlogPost[];
    try {
      posts = await db
        .collection<BlogPost>('blogs') 
        .find({})
        .sort({ date: -1 }) 
        .toArray();
      console.log(`Fetched ${posts.length} posts from 'blogs' collection.`);
    } catch (dbError) {
      console.error('Database query error:', dbError);
      return NextResponse.json({ error: 'Failed to fetch blog posts from database' }, { status: 500 });
    }
    
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
