import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <div className="text-2xl md:text-3xl font-serif italic mb-6 md:mb-8">Wyll Studio <span className="text-brand-orange">Hair</span></div>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm mb-8 md:mb-10 text-sm md:text-base">
              Transformando beleza em Santos há mais de 11 anos. Excelência técnica e atendimento personalizado na Vila Belmiro.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="https://instagram.com/wyllstudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all group">
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://wa.me/5513997087600" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all group">
                <span className="material-symbols-outlined text-white text-lg md:text-xl group-hover:scale-110 transition-transform">chat</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8 text-brand-orange">Navegação</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><a href="#home" className="text-stone-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-stone-400 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8 text-brand-orange">Serviços</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Cabelos</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Mechas</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Unhas</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors">Tratamentos</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8 text-brand-orange">Newsletter</h4>
            <p className="text-stone-400 text-xs md:text-sm mb-6">Receba dicas de beleza e promoções exclusivas.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-brand-orange transition-colors" />
              <button className="bg-brand-orange text-white p-3 rounded-lg hover:bg-brand-orange/80 transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-[10px] md:text-xs uppercase tracking-widest text-center md:text-left">
            © 2024 Wyll Studio Hair. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-stone-500 text-[10px] md:text-xs uppercase tracking-widest hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-stone-500 text-[10px] md:text-xs uppercase tracking-widest hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
