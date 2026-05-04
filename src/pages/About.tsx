import { motion } from 'motion/react';
import { History, Target, Users, MapPin } from 'lucide-react';

const milestones = [
  { year: "1885", title: "The Discovery", desc: "Pharmacist Charles Alderton creates the first blend in Waco, Texas." },
  { year: "1904", title: "World's Fair", desc: "Dr Pepper is introduced to almost 20 million people in St. Louis." },
  { year: "1923", title: "The 23 Flavors", desc: "The legendary formula is perfected and locked in a secret vault." },
  { year: "Today", title: "Global Rebellion", desc: "Millions of fans worldwide refuse ordinary soda for Pepper Bold." },
];

import PageWrapper from '../components/layout/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-32" id="about-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.5em] text-pepper-red font-black text-xs mb-6 inline-block">Established 1885</span>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.9]">
              Built for <br /> the <span className="text-pepper-red">Uncommon</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              We were born in a pharmacy, but we belong to the streets. While the world was satisfied with 'lemon-lime' and 'cola', we were busy experimenting with spices, fruits, and something even more powerful: pure imagination.
            </p>
            <p className="text-neutral-500 mb-10 leading-relaxed">
              Dr Pepper is the oldest major soft drink in America. We've seen trends come and go, but the 23-flavor secret has remained constant. Why? Because you can't fake authentic character.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h4 className="font-display font-black text-4xl text-pepper-red">140+</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-black">Years of Heritage</p>
              </div>
              <div>
                <h4 className="font-display font-black text-4xl text-pepper-red">23</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-black">Secret Ingredients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-pepper-red rounded-[3rem] -rotate-3 z-0" />
            <img 
              src="https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Vintage shop"
              className="relative z-10 w-full rounded-[3rem] object-cover aspect-[4/5] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white text-black p-8 rounded-full flex flex-col items-center justify-center text-center rotate-12 z-20 shadow-2xl">
              <History className="mb-2" />
              <span className="text-[10px] font-black uppercase tracking-widest">Since 1885</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <section className="mb-32">
          <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-20 text-center">Our <span className="text-pepper-red italic">Evolution</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((ms, i) => (
              <div key={i} className="relative p-8 border-l border-white/10 group hover:border-pepper-red transition-colors">
                <span className="font-display font-black text-5xl text-neutral-800 absolute -top-4 -left-1 group-hover:text-pepper-red/20 transition-colors">{ms.year}</span>
                <h4 className="relative z-10 font-display font-bold text-xl uppercase mb-4 mt-8">{ms.title}</h4>
                <p className="relative z-10 text-neutral-500 text-sm leading-relaxed">{ms.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-neutral-900/50 p-12 md:p-20 rounded-[4rem] border border-white/5">
          {[
            { icon: Target, title: "Authenticity", desc: "No copycats. No generic swaps. Just pure, unadulterated flavor." },
            { icon: Users, title: "Community", desc: "The 'Peppers' are more than fans; they're a global culture of individuals." },
            { icon: MapPin, title: "Legacy", desc: "Respecting the past while engineering the future of refreshment." }
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-pepper-red mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pepper-red/20">
                <v.icon size={28} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-4">{v.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
