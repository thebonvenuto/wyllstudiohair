import { InstagramResponse } from '../types/instagram';

export async function fetchInstagramFeed(): Promise<InstagramResponse> {
  try {
    const response = await fetch('/api/instagram');
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    throw error;
  }
}
