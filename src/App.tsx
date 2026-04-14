/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 flex justify-between items-center px-6 md:px-12 py-4">
        <div className="text-2xl font-serif italic text-stone-800 dark:text-stone-50">
          Wyll Studio Hair
        </div>
        <div className="hidden md:flex items-center gap-8 font-serif text-stone-700 dark:text-stone-200 tracking-tight">
          <a className="text-orange-600 dark:text-orange-400 font-bold border-b-2 border-orange-500 pb-1" href="#">Home</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors" href="#about">About</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors" href="#services">Services</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors" href="#portfolio">Portfolio</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors" href="#contact">Contact</a>
        </div>
        <a className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold hover:opacity-80 transition-opacity scale-95 active:duration-150" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair.">
          Book Now
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-[0.85]" alt="luxury hair salon interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9cGOvoMbEzxjRBAHdXZ0h06VvcUehfqAIm6PtsV35QxDhbyPMNV_NkE2CG1VVJj7na7BE6doE1YBj0WKLig6SqedUnyHpK6aqxumDW3asb38IMo7ncuiyMeiSBH6ANlTj-lXmMUgKWL2Vs_Mx5VfSeSQTzYwIf6DX3UZxQXvtQ9RTzIqzFBJQx4IrJ0uupQ-nDi_Yt7zCSAwjPfjI5DXJ9C4yc37lq506XpJoAOVFLVZYMsWW1evOmoaks-bFNayW5aYUEuWPsDVM" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary-fixed-dim backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase">
              Salão de beleza em Santos
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
              Transforme sua beleza no <span className="italic text-primary-container">Wyll Studio Hair</span> em Santos.
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-xl font-light leading-relaxed">
              Especialistas em cabelos, unhas e tratamentos capilares em um ambiente acolhedor e profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair.">
                <span className="material-symbols-outlined">chat</span>
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-surface" id="about">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="professional hair stylist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB84xZA2XyxqKnkfpvu8ikc_BsaiaHMaGTs6fy-p7_WHz68uBS3IrxRceznAIor57Q-_0x8KiRA6qMmI19lCkjwBduUwhRwrB3Pz9uRdBofyVjyZajTAK_shEruEKDI7iGzII0QwbKu3NApy9DnWrQMMxdBc4BSczIU5qXqszzFSyMk29idOUA9nnQcRdFm7whwILzWslpA4DyMe8WHy1Smu0r0VaLscG-v1UAH7p1U0Kd67IlZ1hh2Rd2-R1sV7kwlfutPBQBs7Jsr" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-8 rounded-2xl shadow-xl max-w-xs hidden lg:block">
                <p className="text-primary text-5xl font-serif italic mb-2">11+</p>
                <p className="font-bold text-on-surface-variant">Anos de experiência</p>
                <p className="text-sm text-secondary">Cuidado personalizado e excelência técnica em Vila Belmiro.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif text-on-surface-variant mb-8 leading-tight">Tradição em realçar sua melhor versão</h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>Com mais de 11 anos de história em Santos, o Wyll Studio Hair nasceu da paixão por cuidar não apenas dos fios, mas da autoestima de cada mulher que passa por nossa cadeira.</p>
                <p>Nosso espaço na Vila Belmiro foi planejado para ser um refúgio de tranquilidade. Aqui, você encontra um ambiente aconchegante, atendimento personalizado e profissionais que entendem que cada cabelo tem sua própria identidade.</p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="flex flex-col gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <h4 className="font-bold text-on-surface">Profissionalismo</h4>
                    <p className="text-sm">Técnicas atualizadas e precisão em cada detalhe.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">spa</span>
                    <h4 className="font-bold text-on-surface">Acolhimento</h4>
                    <p className="text-sm">Um café quente e um sorriso para receber você.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-surface-container-low" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-on-surface-variant mb-4">Nossos Serviços</h2>
            <p className="text-secondary">Especialidades pensadas para seu bem-estar completo. Cabelo feminino em Santos com quem entende do assunto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured: Hair Treatments */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" alt="luxurious hair treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-h5LhasTW1Mv1u6Z6wGHYv1Y2waagtEtRlQg_1GnuBm8iLG4LyGwlzBLI38Cdy1OsgAO_22cYPVyext5iZnwgq7LjyNujJHsdllWSgRDGaaWDl9zsb74UPsdSR-0K5__9CjLgJHiz-2wM0XZsX_dqelCI9shyJPrDffJcd7Om67XZew9QuNGfV_EWN9m9Zo-Ecq8Wmcpi4uxJ1_g564Wrab9Uc2GA_h477Pfo-cjgin18Pf7JQAJHEm6J-6DKe00g70HF545qQ2Ms" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-primary-container text-on-primary-container text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block">Destaque</span>
                <h3 className="text-3xl font-serif text-white mb-2">Tratamentos Capilares</h3>
                <p className="text-stone-300 mb-4 max-w-md">Recuperação profunda para cabelos danificados com tecnologia de ponta.</p>
                <a className="text-primary-fixed-dim font-bold flex items-center gap-2 hover:gap-4 transition-all" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Tratamentos%20Capilares.">Consulte pelo WhatsApp <span className="material-symbols-outlined">arrow_forward</span></a>
              </div>
            </div>
            {/* Featured: Highlights */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" alt="blonde balayage highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Lk0T4wql-vTP0BA8f31oAlwWmsgRMAfRSFkTkW3b0OHha3CfgnbX5w0rsxXcEshjmlvdA4-mxG4wIMhGmAI258cLy1vu4yTzzoqqBjCQbKBvn-hqpT3toQPDtJBsV44AGV1kSsSmgqBSH_yDxt3gCa_FZzgPpmjAh2_q2OAV8qUPeEp_GcZhNbrynW7uPch3npY_lAUDTeMFfx2SG643GOiSuAfI4t9KrHfbDrNbARXtskRqDVj4Tqxg7SRLqjYwEuDel4sAuCPq" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Mechas &amp; Balayage</h3>
                <a className="text-primary-fixed-dim font-bold flex items-center gap-2 text-sm" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Mechas%20e%20Balayage.">Consulte pelo WhatsApp</a>
              </div>
            </div>
            {/* Featured: Nails */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" alt="manicured nails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrM48X6LHPhHnCQp61ROvxEGLM6mzIPTSxZj9T2VemmvotJZYtWbeqJsonm38CcIR0fhO9M6KqqHDG0frBryBVhVnyx138Oi2kYxoiApCUWeiiohyt85_GbUlaMGOUYQjkfnf4Ho_AC0qBJqGzZRZ1zB3I9o9pTmqt7dZRcUPIfHAlkC1UaQBuNu7RfQ79u7u2YldjVwp0ZRdrOYwFrHeFS4Gi5dRDFB3NE9RbBJZBtVlPkUhvQWRMBIucz5N5_rvDbmbbFiRhf2NY" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Unhas</h3>
                <a className="text-primary-fixed-dim font-bold flex items-center gap-2 text-sm" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20fazer%20as%20Unhas.">Consulte pelo WhatsApp</a>
              </div>
            </div>
            {/* Featured: Progressive */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" alt="smooth straight hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEs6ms7-6B2UUtVHrGEZNmSnn72o-S-mLb5NA5_PwE1i-XKJ96yhEP-c7Jpg5VpnwpEkbgAjXzKAPLiIP7MRbJM__xXbF49b7OpvMV5ndLcZeibIl720kI3voLJXi-Yt3AERFG0qRQMdmkwhHnFnoGIFcgvNunES4GWQvTnu-hdu9frHMFn75wlqSBtDHuidZu_LJdlGNgmKH1p-A15sOiCGW3KbG4f9XvTndN55mBmO33vQ80r3pZvx_ZvmH2zMoFYfAtXTcK9_ih" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Progressiva</h3>
                <a className="text-primary-fixed-dim font-bold flex items-center gap-2 text-sm" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Progressiva.">Consulte pelo WhatsApp</a>
              </div>
            </div>
            {/* Secondary: Others */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6 h-[400px]">
              <div className="bg-surface-container-lowest p-6 rounded-3xl flex flex-col justify-center border border-outline-variant/10">
                <h3 className="text-xl font-serif text-on-surface-variant mb-2">Sobrancelhas</h3>
                <p className="text-sm text-secondary mb-4">Design personalizado para seu olhar.</p>
                <a className="text-primary font-bold text-sm" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20Sobrancelhas.">Consulte via WhatsApp</a>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-3xl flex flex-col justify-center border border-outline-variant/10">
                <h3 className="text-xl font-serif text-on-surface-variant mb-2">Depilação</h3>
                <p className="text-sm text-secondary mb-4">Cuidado e suavidade para sua pele.</p>
                <a className="text-primary font-bold text-sm" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Depilação.">Consulte via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-container/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface-variant mb-4">Produtos Premium</h3>
              <p className="text-secondary">Utilizamos apenas as melhores marcas do mercado mundial para garantir a saúde dos seus fios.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-container/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface-variant mb-4">Especialistas em Santos</h3>
              <p className="text-secondary">Referência como o melhor salão de beleza na Vila Belmiro, unindo conveniência e alto padrão.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-container/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">person_celebrate</span>
              </div>
              <h3 className="text-2xl font-serif text-on-surface-variant mb-4">Atendimento Único</h3>
              <p className="text-secondary">Consultoria personalizada para entender seu desejo e entregar o resultado que você sempre sonhou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-surface-container-low overflow-hidden" id="portfolio">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-on-surface-variant">Nosso Portfólio</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 no-scrollbar pb-12">
          <div className="flex-none w-[300px] md:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="hairstyle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxW6UNpDKXOGI5IFoKpfxWHfu4mjnylxEsn9FAG85MnnnEI2EFI0kucJK_R6smjsHbRQLqN-Ai_gRaIhSS2ZR2-4wUstqpI2987yAfr4PBiNzexdkq8flRJxpCZyMTacqg-9_zA-fTXy0YdcWS2pLnBY0NcBOcTJi-S6JLtM4g3LPX8HnwIhvWmtVBvNtwztL4YH9iGa8Qv0gPiVEMvYf9oaFaIQ8X415TjN6er_sXzQL-3SV3XyxdabHCRIIv6Godz77mYMcRuIWB" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-none w-[300px] md:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="hair highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3DOFMey5BJNeCPGYSURvCGZPRy1cXFI-eeSQ9FhsOsX8jw28oJ6R2cMLwGMW87GrfqYVbGD7Em9Iw4k_DTpiKjZzN7V4ySdRjJW4I4iaW9IkAoHpVcmgNxv-rLvqSp4twPX1DC89hvzmewCkSOaFlY6SKDgua9q48KiC7OO7xpPvS8_qhAQW5FEWkf3nnEi_rRgq5pJi9vyjM09km2iua8mm21KBBjBnTvVMrpAxnlcvWI3uRZQY5-QOPR_hjSkZHWwKk883H4vB" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-none w-[300px] md:w-[450px] scale-105 aspect-[3/4] rounded-[2rem] overflow-hidden group shadow-2xl">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="hair transformation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGpeY7xjO0GyIf-bpng8jS_4OUUQE6Miw1Zio226pmtb-271q4BxMBttMZpcvu99ZZvQhmqYdtJUSCPBc-VhIT5Alg6Xu_NrjjoKDYtzsNZHy3OjNjSVEiLFkFaVKdP-ldNEiv4X2CMejaltBGyUPvtobmdax6tRLqa8YXihaxhy2_OmfJn0-EWpW3Ntb6o6lxGbp1WnlmCrfmdF6SFkNVxPuKEenlyGPoHVK16-tgyZIxdrHZhZQTund4evBxwgJfIKOtUlOD_lgn" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-none w-[300px] md:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="nail art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtQ2DF_wUqgZujnPyJCwWaJx3YRZJr3jS_ErxkBjkozDBzLOQxlqUSRcp__wkGGYvnV_8G1UkdY2R2wmQNobpCqPXFpMgf-13d7tlC7rYKwbkCavkDecoaS7CHME_V0Uh2uuKx-_JIn-1oLSwu0PAglEaQCYVpkrH44NwN4KMLsAKWE60FXTEaV8dsjs3xEBZ8MuNTrgOXVrgWrID9RFTe-GIaLKImGOISKfmhoFJYjWM3yfE5_EBJNkylPagu68mI0NcAzJ2F9H5S" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-12 rounded-[2.5rem] relative">
              <span className="material-symbols-outlined text-primary/20 text-8xl absolute top-6 right-8">format_quote</span>
              <p className="text-xl font-serif text-on-surface-variant italic mb-8 relative z-10">
                "O melhor atendimento de Santos! O Wyll é um artista, transformou meu cabelo e me senti maravilhosa. O ambiente é muito acolhedor."
              </p>
              <div>
                <p className="font-bold text-on-surface">Mariana Silva</p>
                <p className="text-sm text-secondary">Cliente há 3 anos</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-12 rounded-[2.5rem] relative">
              <span className="material-symbols-outlined text-primary/20 text-8xl absolute top-6 right-8">format_quote</span>
              <p className="text-xl font-serif text-on-surface-variant italic mb-8 relative z-10">
                "Fiz minhas unhas e mechas, e o resultado foi impecável. Equipe profissional e produtos de muita qualidade. Recomendo de olhos fechados!"
              </p>
              <div>
                <p className="font-bold text-on-surface">Fernanda Oliveira</p>
                <p className="text-sm text-secondary">Cliente Fidelidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-serif text-on-surface-variant mb-4">Acompanhe nosso dia a dia</h2>
            <p className="text-secondary max-w-xl">Siga-nos no Instagram <a href="https://instagram.com/wyllstudio" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">@wyllstudio</a> para ver as últimas transformações e dicas de beleza.</p>
          </div>
          <a href="https://instagram.com/wyllstudio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors self-start md:self-auto">
            Seguir no Instagram
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href="https://instagram.com/wyllstudio" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden bg-stone-100">
              <img 
                src={`https://picsum.photos/seed/salon-insta-${i}/600/600`} 
                alt={`Instagram post ${i}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-surface-container-low" id="contact">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-sm flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-12 md:p-16">
              <h2 className="text-4xl font-serif text-on-surface-variant mb-8">Venha nos visitar</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-bold text-on-surface">Endereço</p>
                    <p className="text-secondary leading-relaxed">Rua Dom João VI, 25<br />Vila Belmiro, Santos, SP</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <p className="font-bold text-on-surface">Horário de Funcionamento</p>
                    <p className="text-secondary leading-relaxed">Quarta a Sábado: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">phone_iphone</span>
                  <div>
                    <p className="font-bold text-on-surface">Fale Conosco (WhatsApp)</p>
                    <div className="flex flex-col gap-1">
                      <a className="text-primary hover:underline" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.">(13) 99708-7600</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <a className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair.">
                  Agendar Agora
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvI7EUhXtDc0xdA5ZQyh4eo1hcTlrkaYUyIE0MBLgNAXtLOlDt16XN1eu7mQlomRX39wsfOOq-eH1C7ABKFy9Fb0PPv-EC99M8v9hq0I8pnxbothTM0kjqR4H4k6h3XQ2RGt69NmJrSATB33xhCircElORvRzKhpQZyb6Fe5DXlTGlAPBIP87WjDUGDmxB4-uCMqeEU5wEwdapmqLoxtGj8trgPi0Iptv5IZnbPCRCnuaN3WTqxEb-OexLgCIMEvhRt8HsW2lP1lb" referrerPolicy="no-referrer" />
              {/* Map Placeholder Overlay */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center p-8 text-center" data-location="Santos, SP, Brazil">
                <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm">
                  <p className="font-serif italic text-primary text-lg mb-2">Estamos na Vila Belmiro</p>
                  <p className="text-sm text-secondary">Localização privilegiada e de fácil acesso para você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-950 w-full rounded-t-3xl mt-20 flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-serif text-xl text-stone-800 dark:text-stone-100">Wyll Studio Hair</div>
          <p className="font-sans text-sm tracking-wide text-stone-600 dark:text-stone-400">© 2024 Wyll Studio Hair - Vila Belmiro, Santos. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-stone-500 hover:text-orange-500 transition-colors hover:underline decoration-orange-500/30 text-sm font-sans tracking-wide" href="https://instagram.com/wyllstudio">Instagram</a>
          <a className="text-stone-500 hover:text-orange-500 transition-colors hover:underline decoration-orange-500/30 text-sm font-sans tracking-wide" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.">WhatsApp</a>
          <a className="text-stone-500 hover:text-orange-500 transition-colors hover:underline decoration-orange-500/30 text-sm font-sans tracking-wide" href="#">Facebook</a>
          <a className="text-stone-500 hover:text-orange-500 transition-colors hover:underline decoration-orange-500/30 text-sm font-sans tracking-wide" href="#">Privacy Policy</a>
        </div>
        <div className="flex gap-6">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Horário</p>
            <p className="text-sm text-stone-600 dark:text-stone-400">Qua-Sáb: 10h às 18h</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a aria-label="WhatsApp" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group" href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Wyll%20Studio%20Hair.">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.437 5.662 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
        <span className="absolute right-full mr-4 bg-white text-on-surface px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Fale com a gente!</span>
      </a>
    </>
  );
}
