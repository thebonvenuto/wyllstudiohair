import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="contact">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-brand-black rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 p-8 md:p-20 text-white"
          >
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 md:mb-8 block">Localização & Contato</span>
            <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-12 leading-tight">Venha nos <span className="italic text-brand-orange">visitar</span>.</h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-brand-orange text-xl md:text-2xl">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1 md:mb-2">Endereço</p>
                  <p className="text-stone-400 font-light leading-relaxed text-sm md:text-base">Rua Dom João VI, 25<br />Vila Belmiro, Santos, SP</p>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-brand-orange text-xl md:text-2xl">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1 md:mb-2">Horário</p>
                  <p className="text-stone-400 font-light leading-relaxed text-sm md:text-base">Quarta a Sábado: 10:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-brand-orange text-xl md:text-2xl">phone_iphone</span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1 md:mb-2">WhatsApp</p>
                  <a className="text-brand-orange text-xl md:text-2xl font-serif italic hover:underline" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.">(13) 99708-7600</a>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg shadow-xl shadow-brand-orange/20 transition-all" 
                href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair."
              >
                Agendar Agora
                <span className="material-symbols-outlined">arrow_forward</span>
              </motion.a>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 min-h-[350px] md:min-h-[500px] relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" 
              alt="map" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvI7EUhXtDc0xdA5ZQyh4eo1hcTlrkaYUyIE0MBLgNAXtLOlDt16XN1eu7mQlomRX39wsfOOq-eH1C7ABKFy9Fb0PPv-EC99M8v9hq0I8pnxbothTM0kjqR4H4k6h3XQ2RGt69NmJrSATB33xhCircElORvRzKhpQZyb6Fe5DXlTGlAPBIP87WjDUGDmxB4-uCMqeEU5wEwdapmqLoxtGj8trgPi0Iptv5IZnbPCRCnuaN3WTqxEb-OexLgCIMEvhRt8HsW2lP1lb" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-brand-orange/20 backdrop-blur-[2px] flex items-center justify-center p-6 md:p-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl max-w-sm text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-brand-orange text-2xl md:text-3xl">pin_drop</span>
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-brand-black mb-2 md:mb-4">Estamos na Vila Belmiro</h4>
                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">Localização privilegiada e de fácil acesso para você viver sua melhor experiência.</p>
                <a 
                  href="https://maps.google.com/?q=Rua+Dom+João+VI,+25+Vila+Belmiro+Santos+SP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 md:mt-8 inline-block text-brand-orange font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline"
                >
                  Abrir no Google Maps
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
