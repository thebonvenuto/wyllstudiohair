import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-surface relative overflow-hidden" id="about">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img 
                className="w-full h-full object-cover" 
                alt="professional hair stylist" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB84xZA2XyxqKnkfpvu8ikc_BsaiaHMaGTs6fy-p7_WHz68uBS3IrxRceznAIor57Q-_0x8KiRA6qMmI19lCkjwBduUwhRwrB3Pz9uRdBofyVjyZajTAK_shEruEKDI7iGzII0QwbKu3NApy9DnWrQMMxdBc4BSczIU5qXqszzFSyMk29idOUA9nnQcRdFm7whwILzWslpA4DyMe8WHy1Smu0r0VaLscG-v1UAH7p1U0Kd67IlZ1hh2Rd2-R1sV7kwlfutPBQBs7Jsr" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-brand-black text-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-20"
            >
              <p className="text-brand-orange text-4xl md:text-6xl font-serif italic mb-1 md:mb-2">11+</p>
              <p className="font-bold text-[10px] md:text-sm uppercase tracking-widest text-stone-400">Anos de Excelência</p>
              <p className="text-[9px] md:text-xs text-stone-500 mt-1 md:mt-2">Santos • Vila Belmiro</p>
            </motion.div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 md:-top-6 -left-6 w-full h-full border-2 border-brand-orange/20 rounded-[2rem] md:rounded-[3rem] -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">Nossa História</span>
            <h2 className="text-3xl md:text-6xl font-serif text-brand-black mb-6 md:mb-10 leading-tight">
              Onde a tradição encontra a <span className="italic">sofisticação</span>.
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-secondary leading-relaxed font-light">
              <p>
                Com mais de uma década de atuação em Santos, o <span className="font-medium text-brand-black">Wyll Studio Hair</span> consolidou-se como um refúgio de beleza e bem-estar na Vila Belmiro.
              </p>
              <p>
                Nossa filosofia baseia-se no atendimento humanizado e na busca constante pelas técnicas mais modernas do mercado mundial. Acreditamos que cada cliente é única, e nosso papel é traduzir sua personalidade em um visual impecável.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-6 md:pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-brand-orange text-xl md:text-2xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm md:text-base mb-1">Expertise Técnica</h4>
                    <p className="text-xs md:text-sm text-stone-500">Profissionais em constante atualização com as tendências globais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-brand-orange text-xl md:text-2xl">spa</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm md:text-base mb-1">Ambiente Exclusivo</h4>
                    <p className="text-xs md:text-sm text-stone-500">Um espaço pensado para o seu conforto e relaxamento total.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

