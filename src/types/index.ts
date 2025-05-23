
import type { ObjectId } from 'mongodb';

export interface BlogPost {
  _id: ObjectId | string; // ObjectId from DB, string after serialization
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  date: string | Date; // Date from DB, string after serialization or for display
  content?: string; // Optional full content for detail page
}
