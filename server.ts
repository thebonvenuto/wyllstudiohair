import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Scenario A: Manual/Mock Posts (Fallback)
  const MOCK_POSTS = [
    {
      id: 'mock_1',
      media_url: 'https://picsum.photos/seed/salon-1/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'Transformação incrível de hoje! ✨ #wyllstudio #hair',
      timestamp: new Date().toISOString()
    },
    {
      id: 'mock_2',
      media_url: 'https://picsum.photos/seed/salon-2/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'Mechas iluminadas para nossa cliente especial. 💇‍♀️',
      timestamp: new Date().toISOString()
    },
    {
      id: 'mock_3',
      media_url: 'https://picsum.photos/seed/salon-3/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'Cuidado e sofisticação em cada detalhe. 💅',
      timestamp: new Date().toISOString()
    },
    {
      id: 'mock_4',
      media_url: 'https://picsum.photos/seed/salon-4/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'O loiro dos sonhos existe e nós podemos realizar! 🌟',
      timestamp: new Date().toISOString()
    },
    {
      id: 'mock_5',
      media_url: 'https://picsum.photos/seed/salon-5/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'Ambiente preparado para seu conforto total. ☕',
      timestamp: new Date().toISOString()
    },
    {
      id: 'mock_6',
      media_url: 'https://picsum.photos/seed/salon-6/600/600',
      permalink: 'https://instagram.com/wyllstudio',
      caption: 'Agende seu horário e brilhe! ✨',
      timestamp: new Date().toISOString()
    }
  ];

  // API Route for Instagram Feed
  app.get('/api/instagram', async (req, res) => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    // Scenario B: Automatic Feed (if token exists)
    if (accessToken) {
      try {
        // Note: This uses the Instagram Graph API for Professional accounts
        // Documentation: https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch from Instagram API');
        }
        
        const data = await response.json();
        return res.json({
          source: 'api',
          posts: data.data.slice(0, 6) // Return top 6 posts
        });
      } catch (error) {
        console.error('Instagram API Error:', error);
        // Fallback to mock if API fails but token was present
        return res.json({
          source: 'fallback',
          posts: MOCK_POSTS,
          error: 'API connection failed, showing fallback data.'
        });
      }
    }

    // Scenario A: Manual/Mock (Default)
    return res.json({
      source: 'mock',
      posts: MOCK_POSTS
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Instagram Feed API available at http://localhost:${PORT}/api/instagram`);
  });
}

startServer();
