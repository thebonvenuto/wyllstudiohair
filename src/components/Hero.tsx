import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black" id="home">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="luxury hair salon interior" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9cGOvoMbEzxjRBAHdXZ0h06VvcUehfqAIm6PtsV35QxDhbyPMNV_NkE2CG1VVJj7na7BE6doE1YBj0WKLig6SqedUnyHpK6aqxumDW3asb38IMo7ncuiyMeiSBH6ANlTj-lXmMUgKWL2Vs_Mx5VfSeSQTzYwIf6DX3UZxQXvtQ9RTzIqzFBJQx4IrJ0uupQ-nDi_Yt7zCSAwjPfjI5DXJ9C4yc37lq506XpJoAOVFLVZYMsWW1evOmoaks-bFNayW5aYUEuWPsDVM" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block mb-6 px-4 md:px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Experiência Premium em Santos
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Realce sua <span className="italic text-brand-orange">essência</span> e brilhe com confiança.
          </h1>
          <p className="text-base md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            No Wyll Studio Hair, transformamos tendências em beleza personalizada, em um ambiente sofisticado e acolhedor na Vila Belmiro.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl shadow-brand-orange/30 transition-all overflow-hidden" 
              href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair."
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span>
                Agendar Horário
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
            
            <a 
              className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-orange transition-colors group py-2" 
              href="#services"
            >
              Conhecer Serviços
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </div>


      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-orange to-transparent"></div>
      </motion.div>
    </header>
  );
}
