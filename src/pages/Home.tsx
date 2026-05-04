import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, Zap, Droplets, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const flavors = [
  "Spicy Cherry", "Deep Caramel", "Wild Licorice", "Midnight Plum", "Sweet Vanilla", "Ginger Root"
];

const testimonials = [
  { name: "Alex Z.", role: "Flavor enthusiast", comment: "Nothing else hits like this. It's not just a soda, it's a mood.", rating: 5 },
  { name: "Sarah K.", role: "Digital Creator", comment: "The 23 flavors are real. Every sip is a different discovery.", rating: 5 },
  { name: "Marcus L.", role: "Student", comment: "I've been drinking this since middle school and the quality is still top-tier.", rating: 5 },
];

import PageWrapper from '../components/layout/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div id="home-page">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20" id="hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pepper-black via-pepper-black/80 to-transparent z-10" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1920&h=1080" 
              alt="Liquid splash"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-pepper-red text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8 shadow-lg shadow-pepper-red/30">
              Limited Edition Discovery
            </span>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.85] mb-8">
              Bold <br />
              <span className="text-pepper-red">Refined</span> <br />
              Rebel
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light">
              Experience the legendary blend of 23 unique flavors. A symphony of spice, sweetness, and carbonated perfection.
            </p>
            <div className="flex flex-col sm:row items-start gap-4">
              <Link 
                to="/products"
                className="pepper-gradient px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-pepper-red/40"
              >
                Try It Today <ArrowRight size={18} />
              </Link>
              <button className="px-10 py-5 rounded-full border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
                The 23 Secrets
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0, rotate: 10 }}
            animate={{ y: 0, opacity: 1, rotate: -5 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-20 bg-pepper-red/20 blur-[120px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Soda Can"
              className="w-full max-w-sm mx-auto drop-shadow-[0_35px_60px_rgba(123,17,19,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 23 Flavors Highlights */}
      <section className="py-32 bg-pepper-black border-y border-white/5 overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6">
                The Anatomy <br /> of <span className="text-pepper-red italic px-2">Greatness</span>
              </h2>
              <p className="text-neutral-500 text-lg">
                For over a century, we've secretely blended 23 distinct notes to create a taste that cannot be categorized. It's not cola, it's not root beer—it's everything.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-display font-black text-8xl text-outline-white opacity-20 leading-none">23</span>
              <span className="text-xs uppercase tracking-[0.5em] font-black text-rose-500">Secret Notes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Bold Energy", desc: "A caffeine kick wrapped in a flavor tapestry that awakens your senses." },
              { icon: Droplets, title: "Pure Carbonation", desc: "Perfectly micro-bubbled for that crisp, sharp finish every time." },
              { icon: Target, title: "Zero Ordinary", desc: "We don't do 'regular'. Every sip challenges what you think a soda can be." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-morphism p-10 rounded-3xl group"
              >
                <div className="w-16 h-16 bg-pepper-red rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-pepper-red/20">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase mb-4">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Marquee */}
      <div className="py-20 bg-pepper-red/5 overflow-hidden border-b border-white/5">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-20"
        >
          {[...flavors, ...flavors].map((flavor, i) => (
            <span key={i} className="font-display font-black text-8xl uppercase tracking-tighter text-white/5 hover:text-pepper-red/50 transition-colors cursor-default">
              {flavor}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <section className="py-32 px-6" id="reviews">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-4">
            Loved by the <span className="text-pepper-red">Flavor Seekers</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#7B1113" stroke="none" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 rounded-3xl bg-neutral-900/50 relative"
            >
              <Quote className="absolute -top-4 -left-4 text-pepper-red opacity-50" size={40} />
              <p className="text-neutral-300 italic mb-8 leading-relaxed">"{testi.comment}"</p>
              <div>
                <h4 className="font-bold text-white tracking-tight">{testi.name}</h4>
                <p className="text-xs text-neutral-600 uppercase tracking-widest font-black">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] pepper-gradient p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-tight">
              Ready to quit the <span className="text-black italic">Ordinary?</span>
            </h2>
            <p className="text-white/80 text-xl mb-12">
              Join millions who have chosen the unique, the bold, and the legendary. Your favorite flavor is waiting.
            </p>
            <div className="flex flex-col sm:row items-center justify-center gap-6">
              <Link 
                to="/products"
                className="bg-white text-pepper-red px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-black/20"
              >
                Buy Now
              </Link>
              <Link 
                to="/contact"
                className="bg-black/20 backdrop-blur-md px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black/30 transition-all border border-white/10"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  );
}
