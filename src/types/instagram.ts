export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  media_type?: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  thumbnail_url?: string;
}

export interface InstagramResponse {
  source: 'api' | 'mock' | 'fallback';
  posts: InstagramPost[];
  error?: string;
}
