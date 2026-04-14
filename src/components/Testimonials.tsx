import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Cliente há 3 anos",
    text: "O melhor atendimento de Santos! O Wyll é um artista, transformou meu cabelo e me senti maravilhosa. O ambiente é muito acolhedor e profissional.",
    avatar: "MS"
  },
  {
    name: "Fernanda Oliveira",
    role: "Cliente Fidelidade",
    text: "Fiz minhas unhas e mechas, e o resultado foi impecável. Equipe profissional e produtos de muita qualidade. Recomendo de olhos fechados!",
    avatar: "FO"
  },
  {
    name: "Camila Santos",
    role: "Cliente Recente",
    text: "Espaço incrível na Vila Belmiro. Fui muito bem recebida e o resultado da minha progressiva ficou perfeito. Brilho intenso e natural.",
    avatar: "CS"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream relative overflow-hidden" id="testimonials">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-serif italic text-brand-orange/5 whitespace-nowrap pointer-events-none select-none">
        Feedback
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">Voz das Clientes</span>
          <h2 className="text-3xl md:text-6xl font-serif text-brand-black leading-tight">
            O que dizem sobre <span className="italic">nós</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-orange/5 relative group"
            >
              <span className="material-symbols-outlined text-brand-orange/20 text-6xl md:text-8xl absolute top-4 right-6 md:top-6 md:right-8 group-hover:text-brand-orange/30 transition-colors">format_quote</span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 md:mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-brand-orange text-xs md:text-sm fill-current">star</span>
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-serif text-brand-black italic mb-8 md:mb-10 leading-relaxed">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-xs md:text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-brand-black text-sm md:text-base">{item.name}</p>
                    <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
