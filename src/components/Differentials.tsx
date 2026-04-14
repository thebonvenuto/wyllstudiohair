import { motion } from 'motion/react';

const items = [
  {
    icon: "workspace_premium",
    title: "Produtos Premium",
    description: "Utilizamos apenas as melhores marcas do mercado mundial para garantir a saúde dos seus fios."
  },
  {
    icon: "location_on",
    title: "Especialistas em Santos",
    description: "Referência como o melhor salão de beleza na Vila Belmiro, unindo conveniência e alto padrão."
  },
  {
    icon: "person_celebrate",
    title: "Atendimento Único",
    description: "Consultoria personalizada para entender seu desejo e entregar o resultado que você sempre sonhou."
  }
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-brand-orange transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-orange/20">
                <span className="material-symbols-outlined text-brand-orange text-3xl md:text-4xl group-hover:text-white transition-colors">{item.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-black mb-3 md:mb-4">{item.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
