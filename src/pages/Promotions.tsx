import { motion } from 'motion/react';
import { Tag, Clock, Gift, Percent, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  {
    title: "Triple Mix Pack",
    desc: "3 Cases of any flavor for the price of 2. Mix and match your destiny.",
    code: "BOLDMIX3",
    expiry: "48 Hours Left",
    color: "bg-pepper-red"
  },
  {
    title: "First Timer Gift",
    desc: "New to the 23-flavor life? Get a free limited-edition glass with your first order.",
    code: "FIRSTPEP",
    expiry: "Ongoing",
    color: "bg-neutral-800"
  }
];

import PageWrapper from '../components/layout/PageWrapper';

export default function Promotions() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-32" id="promotions-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
            Epic <span className="text-pepper-red">Drops</span> <br /> & Deals
          </h1>
          <p className="text-neutral-400 text-lg">
            Exclusive access to limited runs, sudden price slashes, and fan-only perks. Blink and you'll miss it.
          </p>
        </div>

        {/* Featured Promotion */}
        <section className="mb-32">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1200&h=600" 
              alt="Limited edition"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-full flex items-center gap-2">
                  <Clock size={12} /> Mystery Drop
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest leading-none">Ending Soon</span>
              </div>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-white">
                Phantom <span className="text-pepper-red">Spice</span> <br /> Pack
              </h2>
              <p className="text-neutral-300 max-w-xl text-lg mb-8 leading-relaxed">
                The world's most mysterious flavor combo. Only 5,000 packs available. No restocks. No regrets.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="pepper-gradient px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">
                  Grab Yours Fast
                </Link>
                <button className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                  Notify Me
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] ${offer.color} relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10">
                <Tag className="mb-6 opacity-50" size={32} />
                <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-4 leading-none">{offer.title}</h3>
                <p className="text-white/70 mb-8 max-w-sm">{offer.desc}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Use Code</p>
                    <p className="font-mono font-bold text-2xl tracking-wider">{offer.code}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Expires</p>
                    <p className="font-bold text-sm tracking-widest">{offer.expiry}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gamification / Interactive */}
        <section className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Zap size={200} />
          </div>
          <div className="max-w-2xl mx-auto">
            <Gift className="mx-auto mb-8 text-yellow-500" size={48} />
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">Spin for <br /> Secret <span className="text-pepper-red italic">Prizes</span></h2>
            <p className="text-neutral-500 text-lg mb-12">
              Every Friday, we host a live flavor roulette. Win discounts, merch, or even a lifetime supply of Pepper Bold.
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-pepper-red hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto">
              Join Next Session <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </div>
    </PageWrapper>
  );
}
