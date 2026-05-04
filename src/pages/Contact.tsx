import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { useState } from 'react';

import PageWrapper from '../components/layout/PageWrapper';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-32" id="contact-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.9]">
              Let's <br /> <span className="text-pepper-red italic">Talk Shop</span>
            </h1>
            <p className="text-neutral-400 text-lg mb-12 max-w-md">
              Got a flavor suggeston? Want to bulk order for your next rebellion? Or just want to say hi to the 23 secret ingredients?
            </p>

            <div className="space-y-8 mb-16">
              {[
                { icon: Mail, label: "Email Us", val: "hello@pepperbold.com" },
                { icon: Phone, label: "Call Us", val: "+1 (800) PEP-BOLD" },
                { icon: MapPin, label: "Headquarters", val: "723 Spice Avenue, Waco, TX" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-pepper-red group-hover:bg-pepper-red group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-600 mb-1">{item.label}</p>
                    <p className="font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Follow the movement</h4>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-morphism p-10 md:p-16 rounded-[4rem]">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8">
                  <Send size={40} />
                </div>
                <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-4 text-white">Message Sent!</h3>
                <p className="text-neutral-500 max-w-xs">We've received your transmission. Our flavor scientists will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-500 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-pepper-red outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-500 ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-pepper-red outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-500 ml-2">Subject</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-pepper-red outline-none transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Bulk Ordering</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-neutral-500 ml-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us everything..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-pepper-red outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full pepper-gradient text-white font-black uppercase tracking-widest py-6 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Blast Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter Wrap */}
        <section className="mt-32 py-20 border-t border-white/5 text-center">
            <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-4 text-white">Join the Secret <span className="text-pepper-red">Circle</span></h2>
            <p className="text-neutral-500 mb-12 max-w-lg mx-auto">Get notified about limited drops, local events, and the 24th flavor rumors.</p>
            <div className="flex max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-neutral-900 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-pepper-red"
                />
                <button className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-pepper-red hover:text-white transition-all">
                    Sign Up
                </button>
            </div>
        </section>
      </div>
    </div>
    </PageWrapper>
  );
}
