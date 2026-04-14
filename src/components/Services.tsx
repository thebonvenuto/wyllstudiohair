import { motion } from 'motion/react';

const services = [
  {
    title: "Tratamentos Capilares",
    description: "Recuperação profunda e nutrição com tecnologia de ponta para fios saudáveis.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-h5LhasTW1Mv1u6Z6wGHYv1Y2waagtEtRlQg_1GnuBm8iLG4LyGwlzBLI38Cdy1OsgAO_22cYPVyext5iZnwgq7LjyNujJHsdllWSgRDGaaWDl9zsb74UPsdSR-0K5__9CjLgJHiz-2wM0XZsX_dqelCI9shyJPrDffJcd7Om67XZew9QuNGfV_EWN9m9Zo-Ecq8Wmcpi4uxJ1_g564Wrab9Uc2GA_h477Pfo-cjgin18Pf7JQAJHEm6J-6DKe00g70HF545qQ2Ms",
    link: "https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Tratamentos%20Capilares.",
    size: "large"
  },
  {
    title: "Mechas & Balayage",
    description: "Iluminação personalizada que valoriza seu rosto e tom de pele.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Lk0T4wql-vTP0BA8f31oAlwWmsgRMAfRSFkTkW3b0OHha3CfgnbX5w0rsxXcEshjmlvdA4-mxG4wIMhGmAI258cLy1vu4yTzzoqqBjCQbKBvn-hqpT3toQPDtJBsV44AGV1kSsSmgqBSH_yDxt3gCa_FZzgPpmjAh2_q2OAV8qUPeEp_GcZhNbrynW7uPch3npY_lAUDTeMFfx2SG643GOiSuAfI4t9KrHfbDrNbARXtskRqDVj4Tqxg7SRLqjYwEuDel4sAuCPq",
    link: "https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Mechas%20e%20Balayage.",
    size: "small"
  },
  {
    title: "Unhas",
    description: "Manicure e pedicure com acabamento impecável e duradouro.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrM48X6LHPhHnCQp61ROvxEGLM6mzIPTSxZj9T2VemmvotJZYtWbeqJsonm38CcIR0fhO9M6KqqHDG0frBryBVhVnyx138Oi2kYxoiApCUWeiiohyt85_GbUlaMGOUYQjkfnf4Ho_AC0qBJqGzZRZ1zB3I9o9pTmqt7dZRcUPIfHAlkC1UaQBuNu7RfQ79u7u2YldjVwp0ZRdrOYwFrHeFS4Gi5dRDFB3NE9RbBJZBtVlPkUhvQWRMBIucz5N5_rvDbmbbFiRhf2NY",
    link: "https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20fazer%20as%20Unhas.",
    size: "small"
  },
  {
    title: "Progressiva",
    description: "Alinhamento capilar com brilho intenso e redução de volume.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEs6ms7-6B2UUtVHrGEZNmSnn72o-S-mLb5NA5_PwE1i-XKJ96yhEP-c7Jpg5VpnwpEkbgAjXzKAPLiIP7MRbJM__xXbF49b7OpvMV5ndLcZeibIl720kI3voLJXi-Yt3AERFG0qRQMdmkwhHnFnoGIFcgvNunES4GWQvTnu-hdu9frHMFn75wlqSBtDHuidZu_LJdlGNgmKH1p-A15sOiCGW3KbG4f9XvTndN55mBmO33vQ80r3pZvx_ZvmH2zMoFYfAtXTcK9_ih",
    link: "https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Progressiva.",
    size: "small"
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-brand-black text-white" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block"
            >
              Nossas Especialidades
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-serif leading-tight"
            >
              Serviços desenhados para o seu <span className="italic text-brand-orange">bem-estar</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-stone-400 max-w-sm font-light leading-relaxed text-sm md:text-base"
          >
            Combinamos produtos de luxo com técnicas exclusivas para entregar resultados que superam expectativas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${
                service.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
              } group relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer`}
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-[0.4]" 
                alt={service.title} 
                src={service.image} 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="text-stone-300 font-light mb-6 md:mb-8 max-w-md text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
                <a 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-[10px] md:text-xs group/link"
                >
                  Consultar via WhatsApp
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* Extra Services Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 bg-surface-container/10 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif mb-2">Outros Cuidados</h3>
              <p className="text-stone-400 font-light text-sm md:text-base">Sobrancelhas, Depilação e muito mais para seu cuidado completo.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <span className="px-4 md:px-6 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest">Sobrancelhas</span>
              <span className="px-4 md:px-6 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest">Depilação</span>
              <span className="px-4 md:px-6 py-2 rounded-full border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest">Escova</span>
            </div>
            <a 
              href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20ver%20a%20tabela%20completa%20de%20serviços."
              className="w-full md:w-auto text-center bg-white text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-orange hover:text-white transition-all"
            >
              Ver Tabela Completa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
