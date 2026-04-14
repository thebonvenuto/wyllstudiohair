import { motion } from 'motion/react';

const portfolioItems = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxW6UNpDKXOGI5IFoKpfxWHfu4mjnylxEsn9FAG85MnnnEI2EFI0kucJK_R6smjsHbRQLqN-Ai_gRaIhSS2ZR2-4wUstqpI2987yAfr4PBiNzexdkq8flRJxpCZyMTacqg-9_zA-fTXy0YdcWS2pLnBY0NcBOcTJi-S6JLtM4g3LPX8HnwIhvWmtVBvNtwztL4YH9iGa8Qv0gPiVEMvYf9oaFaIQ8X415TjN6er_sXzQL-3SV3XyxdabHCRIIv6Godz77mYMcRuIWB",
    alt: "Penteado sofisticado"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU3DOFMey5BJNeCPGYSURvCGZPRy1cXFI-eeSQ9FhsOsX8jw28oJ6R2cMLwGMW87GrfqYVbGD7Em9Iw4k_DTpiKjZzN7V4ySdRjJW4I4iaW9IkAoHpVcmgNxv-rLvqSp4twPX1DC89hvzmewCkSOaFlY6SKDgua9q48KiC7OO7xpPvS8_qhAQW5FEWkf3nnEi_rRgq5pJi9vyjM09km2iua8mm21KBBjBnTvVMrpAxnlcvWI3uRZQY5-QOPR_hjSkZHWwKk883H4vB",
    alt: "Mechas iluminadas"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGpeY7xjO0GyIf-bpng8jS_4OUUQE6Miw1Zio226pmtb-271q4BxMBttMZpcvu99ZZvQhmqYdtJUSCPBc-VhIT5Alg6Xu_NrjjoKDYtzsNZHy3OjNjSVEiLFkFaVKdP-ldNEiv4X2CMejaltBGyUPvtobmdax6tRLqa8YXihaxhy2_OmfJn0-EWpW3Ntb6o6lxGbp1WnlmCrfmdF6SFkNVxPuKEenlyGPoHVK16-tgyZIxdrHZhZQTund4evBxwgJfIKOtUlOD_lgn",
    alt: "Transformação capilar"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtQ2DF_wUqgZujnPyJCwWaJx3YRZJr3jS_ErxkBjkozDBzLOQxlqUSRcp__wkGGYvnV_8G1UkdY2R2wmQNobpCqPXFpMgf-13d7tlC7rYKwbkCavkDecoaS7CHME_V0Uh2uuKx-_JIn-1oLSwu0PAglEaQCYVpkrH44NwN4KMLsAKWE60FXTEaV8dsjs3xEBZ8MuNTrgOXVrgWrID9RFTe-GIaLKImGOISKfmhoFJYjWM3yfE5_EBJNkylPagu68mI0NcAzJ2F9H5S",
    alt: "Nail art exclusiva"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32 bg-surface overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">Galeria de Resultados</span>
            <h2 className="text-3xl md:text-6xl font-serif text-brand-black leading-tight">
              Transformações que <span className="italic">inspiram</span>.
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm font-light leading-relaxed text-sm md:text-base">
            Cada trabalho é único, desenhado para realçar a beleza natural de nossas clientes.
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-6 md:gap-10 px-6 md:px-12 no-scrollbar pb-8 md:pb-12 cursor-grab active:cursor-grabbing">
        {portfolioItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-none w-[280px] md:w-[500px] group"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-brand-orange/10 group-hover:shadow-2xl">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={item.alt} 
                src={item.image} 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <span className="material-symbols-outlined text-white text-2xl md:text-3xl">zoom_in</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
