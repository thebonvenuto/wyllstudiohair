import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchInstagramFeed } from '../services/instagramService';
import { InstagramPost } from '../types/instagram';

export default function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFeed() {
      try {
        setLoading(true);
        const data = await fetchInstagramFeed();
        setPosts(data.posts);
        if (data.error) {
          console.warn('Instagram Feed Warning:', data.error);
        }
      } catch (err) {
        setError('Não foi possível carregar o feed do Instagram no momento.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadFeed();
  }, []);

  return (
    <section className="py-32 bg-surface overflow-hidden" id="instagram">
      <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Social Feed
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-brand-black leading-tight mb-6"
          >
            Acompanhe nosso <span className="italic">dia a dia</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 font-light leading-relaxed"
          >
            Siga-nos no Instagram <a href="https://instagram.com/wyllstudio" className="text-brand-orange font-bold hover:underline" target="_blank" rel="noopener noreferrer">@wyllstudio</a> para ver as últimas transformações e dicas exclusivas.
          </motion.p>
        </div>
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://instagram.com/wyllstudio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-brand-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl"
        >
          Seguir no Instagram
        </motion.a>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="wait">
            {loading ? (
              // Skeleton Loading
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="aspect-square bg-stone-100 rounded-2xl animate-pulse"
                />
              ))
            ) : error ? (
              // Error State
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <span className="material-symbols-outlined text-stone-300 text-6xl mb-4">error_outline</span>
                <p className="text-stone-500 font-light">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 text-brand-orange font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Tentar novamente
                </button>
              </motion.div>
            ) : (
              // Real Posts
              posts.map((post, i) => (
                <motion.a 
                  key={post.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={post.media_url} 
                    alt={post.caption || 'Instagram post'} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <svg className="w-8 h-8 text-white fill-current mb-3" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Ver no Instagram</span>
                  </div>
                </motion.a>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

