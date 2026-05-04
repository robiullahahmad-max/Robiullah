import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pepper-black border-t border-white/5 py-20 px-6" id="main-footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-pepper-red rounded-full flex items-center justify-center font-display font-bold text-2xl">
                P
              </div>
              <span className="font-display font-bold text-3xl tracking-tighter uppercase">Pepper Bold</span>
            </Link>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
              Crafting unique flavor experiences since 1885. 23 secret ingredients. One bold identity. Join the rebellion against the ordinary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">The Brand</h4>
            <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
              <li><Link to="/about" className="hover:text-pepper-red transition-colors">Our History</Link></li>
              <li><Link to="/promotions" className="hover:text-pepper-red transition-colors">Career</Link></li>
              <li><Link to="/contact" className="hover:text-pepper-red transition-colors">Accessibility</Link></li>
              <li><Link to="/contact" className="hover:text-pepper-red transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">Support</h4>
            <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
              <li><Link to="/contact" className="hover:text-pepper-red transition-colors">Contact Us</Link></li>
              <li><Link to="/products" className="hover:text-pepper-red transition-colors">Store Locator</Link></li>
              <li><Link to="/contact" className="hover:text-pepper-red transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-pepper-red transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Pepper Bold Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-neutral-600 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
