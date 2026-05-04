import { motion } from 'motion/react';
import { Minus, Plus, ShoppingCart, Star, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Classic Pepper",
    subtitle: "The Original 23 Flavors",
    desc: "The authentic blend that started it all. Spicy, sweet, and perfectly carbonated.",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&q=80&w=400&h=600",
    rating: 5,
    reviews: 1243,
    variants: ["12oz Can", "20oz Bottle", "2L Bottle"],
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Pepper Zero",
    subtitle: "Zero Sugar, Full Pride",
    desc: "All the bold flavors of the original with exactly zero sugar. Same punch, no compromise.",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1629203851022-39c6f25c293d?auto=format&fit=crop&q=80&w=400&h=600",
    rating: 4.8,
    reviews: 876,
    variants: ["12oz Can", "20oz Bottle"],
    badge: "Fan Favorite"
  },
  {
    id: 3,
    name: "Cherry Edition",
    subtitle: "Smooth & Fruity",
    desc: "An extra kick of cherry goodness blended seamlessly with our secret spices.",
    price: 2.15,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400&h=600",
    rating: 4.9,
    reviews: 542,
    variants: ["12oz Can", "20oz Bottle"],
    badge: "Limited"
  },
  {
    id: 4,
    name: "Vanilla Float",
    subtitle: "Creamy & Dreamy",
    desc: "The nostalgic taste of a soda shop float in a convenient can. Smooth vanilla finish.",
    price: 2.25,
    image: "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&q=80&w=400&h=600",
    rating: 4.7,
    reviews: 231,
    variants: ["12oz Can"],
    badge: "New"
  }
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
      id={`product-${product.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 mb-6 group-hover:border-pepper-red/30 transition-colors">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-pepper-red text-[10px] font-black uppercase tracking-widest rounded-full">
            {product.badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />

        <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full pepper-gradient text-white font-black uppercase tracking-widest py-3 rounded-xl shadow-xl flex items-center justify-center gap-2">
            Quick Add <ShoppingCart size={14} />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{product.name}</h3>
          <p className="text-xs text-neutral-500 uppercase font-black tracking-widest mb-2">{product.subtitle}</p>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-2xl text-pepper-red">${product.price}</p>
          <div className="flex items-center gap-1 justify-end">
            <Star size={10} fill="#7B1113" stroke="none" />
            <span className="text-[10px] font-black text-neutral-400">{product.rating}</span>
          </div>
        </div>
      </div>

      <p className="text-neutral-500 text-sm mb-6 leading-relaxed line-clamp-2">
        {product.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {product.variants.map((v) => (
          <button 
            key={v}
            onClick={() => setSelectedVariant(v)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              selectedVariant === v ? 'bg-white text-black' : 'bg-transparent border border-white/10 text-neutral-500 hover:border-white/30'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-neutral-900 border border-white/10 rounded-full px-4 py-2">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-neutral-500 hover:text-white"><Minus size={14} /></button>
          <span className="w-4 text-center text-sm font-bold">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="text-neutral-500 hover:text-white"><Plus size={14} /></button>
        </div>
        <button className="flex-1 bg-white text-black hover:bg-pepper-red hover:text-white transition-all font-black uppercase tracking-widest text-xs py-3 rounded-full flex items-center justify-center gap-2">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

import PageWrapper from '../components/layout/PageWrapper';

export default function Products() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-32" id="products-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-6">
            Find Your <br /> <span className="text-pepper-red italic">Frequency</span>
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg font-light leading-relaxed">
            From the classic mix to bold new experiments. Every drop is engineered for those who refuse to settle for the mundane.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-32">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          {[
            { icon: Truck, title: "Swift Delivery", desc: "Straight from our secret plant to your doorstep in 48 hours." },
            { icon: ShieldCheck, title: "Secure Checkout", desc: "Encrypted transactions for your peace of mind and data safety." },
            { icon: RefreshCw, title: "Easy Returns", desc: "Not satisfied with the flavor? We'll make it right, no questions asked." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-pepper-red">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
