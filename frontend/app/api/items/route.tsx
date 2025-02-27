// /app/api/items/route.ts

import { NextResponse } from 'next/server';
import { Item } from '../../types/item';  // Import the Item interface

// Sample hardcoded data (replace with actual data from your Django API)
const items: Item[] = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', price: 10 },
  { id: 2, name: 'Item 2', description: 'Description for item 2', price: 20 },
  { id: 3, name: 'Item 3', description: 'Description for item 3', price: 30 },
];

export async function GET() {
  // In a real-world scenario, replace this with a call to your Django API
  return NextResponse.json(items);
}
