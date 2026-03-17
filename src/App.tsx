/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Award,
  UtensilsCrossed,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ORDER_URL = "https://www.google.com/viewer/chooseprovider?mid=/g/1vjdq5r2&g2lbs=AIBNGdXmTdq-CRNeEeiscQgR5QRHFIoA-fbthyesFWWZnO6LP1R4rJp6kDu3LdVdLDg9Ao4k5KL4NCW7_433fA0_db27wGUadw%3D%3D&hl=en-AU&gl=au&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=Zg-5afKyH-egseMP1JGniAk&ei=Zg-5afKyH-egseMP1JGniAk&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-brand-red' : 'text-white'}`}>
              Thanh Thanh
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-red ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition-colors flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-red focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors flex justify-center items-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Vietnamese Beef Noodle Soup"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-brand-green/90 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            South Australia's Local Institution
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
            Authentic Vietnamese Flavors in South Australia
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Proudly serving our community with tradition and passion for more than <span className="text-brand-wood font-semibold italic">20 years</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Order Online Now
              <ChevronRight size={20} />
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/rpYF4hPB/thanh.png"
                alt="Thanh Thanh Restaurant Interior"
                className="w-full h-auto grayscale contrast-125 brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="text-white text-center">
                <span className="block text-4xl font-serif font-bold">20+</span>
                <span className="text-sm uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-green/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A Family Legacy of Taste and Tradition
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over two decades, Thanh Thanh has been more than just a restaurant; it's a cornerstone of the South Australian community. Our journey began with a simple mission: to share the authentic flavors of our homeland with our neighbors.
              </p>
              <p>
                As a family-run business, we take pride in every dish that leaves our kitchen. We use only the freshest local ingredients combined with traditional Vietnamese spices and time-honored recipes passed down through generations.
              </p>
              <p>
                Whether you're a long-time regular or visiting us for the first time, we welcome you with the same warmth and hospitality that has defined us for 20 years.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Authenticity Guaranteed</h4>
                <p className="text-sm text-gray-500">Traditional recipes from the heart of Vietnam.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuHighlights = () => {
  const categories = ["All", "Appetizers", "Soups", "Noodles", "Rice Dishes", "Vegetarian"];
  const [activeCategory, setActiveCategory] = useState("All");

  const allDishes = [
    {
      name: "Traditional Beef Pho",
      category: "Soups",
      description: "24-hour slow-cooked aromatic broth served with fresh rice noodles, tender beef slices, and herbs.",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Bun Thit Nuong",
      category: "Noodles",
      description: "Grilled lemongrass pork served over vermicelli noodles with fresh salad, pickles, and nuoc mam sauce.",
      image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Crispy Vietnamese Pancakes",
      category: "Appetizers",
      description: "Banh Xeo - Savory crispy crepes filled with shrimp, pork, and bean sprouts, served with fresh herbs.",
      image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Fresh Spring Rolls",
      category: "Appetizers",
      description: "Goi Cuon - Rice paper rolls with prawns, pork, vermicelli, and fresh herbs served with peanut sauce.",
      image: "https://tastesbetterfromscratch.com/wp-content/uploads/2018/03/Spring-Rolls-14.jpg?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Com Tam Suon Nuong",
      category: "Rice Dishes",
      description: "Broken rice with grilled pork chop, shredded pork skin, and steamed egg meatloaf.",
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Vegetarian Pho",
      category: "Vegetarian",
      description: "Vegetable broth with tofu, mushrooms, and seasonal greens. Pure and flavorful.",
      image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Spicy Beef Noodle Soup",
      category: "Soups",
      description: "Bun Bo Hue - Spicy lemongrass beef noodle soup with thick vermicelli and tender brisket.",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Tofu Stir-fry",
      category: "Vegetarian",
      description: "Crispy tofu tossed with seasonal vegetables in a savory ginger soy sauce.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredDishes = activeCategory === "All" 
    ? allDishes 
    : allDishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">Our Culinary Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Authentic recipes crafted with fresh ingredients and 20 years of tradition.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-brand-red text-white shadow-lg shadow-red-900/20" 
                  : "bg-stone-100 text-gray-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                key={dish.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-brand-green/90 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{dish.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2 h-16 overflow-hidden">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-green-900/20"
          >
            View Full Menu & Order Online
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800",
    "https://www.seriouseats.com/thmb/U-hWLnDmSZ8_6v07v0yc-8uYxrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Visual Feast</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Food Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-2xl shadow-md"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah L.",
      text: "The most authentic Pho I've had outside of Saigon. The broth is incredibly deep and flavorful. A true Adelaide gem!",
      rating: 5
    },
    {
      name: "Michael T.",
      text: "Been coming here for 10 years and the quality never drops. The crispy pancakes are a must-try. Friendly family service too.",
      rating: 5
    },
    {
      name: "Jessica W.",
      text: "Love the atmosphere and the fresh ingredients. The vegetarian options are actually thoughtful and delicious, not just an afterthought.",
      rating: 4
    },
    {
      name: "David R.",
      text: "Thanh Thanh is a local institution for a reason. Great value, amazing flavors, and always welcoming. 5 stars every time.",
      rating: 5
    }
  ];

  const REVIEW_LINK = "https://www.google.com/maps/place/Thanh+Thanh+Vietnamese+Restaurant/@-34.9309652,138.5960115,17z/data=!4m15!1m8!3m7!1s0x6ab0cf211ed83beb:0x923595bc00766a4f!2sThanh+Thanh+Vietnamese+Restaurant!8m2!3d-34.9309582!4d138.5961074!10e9!16s%2Fg%2F1vjdq5r2!3m5!1s0x6ab0cf211ed83beb:0x923595bc00766a4f!8m2!3d-34.9309582!4d138.5961074!16s%2Fg%2F1vjdq5r2?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 font-bold text-gray-900">4.1 / 5</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Guests Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 p-8 rounded-3xl border border-stone-100 relative"
            >
              <div className="text-brand-red mb-4 opacity-20 absolute top-4 right-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H7.01697C8.67382 4 10.017 5.34315 10.017 7V15C10.017 18.3137 7.33028 21 4.01697 21H2.01697Z" /></svg>
              </div>
              <p className="text-gray-600 italic mb-6 relative z-10">"{review.text}"</p>
              <div className="font-bold text-gray-900">— {review.name}</div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-red-800 transition-all shadow-lg hover:shadow-red-900/20"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

const OrderCTA = () => {
  return (
    <section className="py-20 bg-brand-red relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8">
          Hungry? Order Your Favorites Now
        </h2>
        <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">
          Skip the wait and enjoy authentic Vietnamese cuisine from the comfort of your home. Fast, fresh, and delicious.
        </p>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand-red px-12 py-5 rounded-full text-xl font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
        >
          <ShoppingBag size={24} />
          ORDER ONLINE NOW
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-10">Visit Us Today</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-stone-100 rounded-2xl text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600">18 Field St, Adelaide SA 5000, Australia</p>
                  <a 
                    href="https://www.google.com/maps/place/Thanh+Thanh+Vietnamese+Restaurant/@-34.9309582,138.5961074,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-red font-semibold text-sm mt-2 inline-block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-stone-100 rounded-2xl text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">0882128788</p>
                  <p className="text-sm text-gray-400 mt-1">Call for reservations or takeaway</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-stone-100 rounded-2xl text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between w-full max-w-xs"><span>Mon - Thu:</span> <span>11am–3pm, 5–9pm</span></li>
                    <li className="flex justify-between w-full max-w-xs"><span>Fri - Sat:</span> <span>11am–3pm, 5–9:30pm</span></li>
                    <li className="flex justify-between w-full max-w-xs font-semibold text-brand-red"><span>Sunday:</span> <span>11am–9pm</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-xl border-8 border-stone-50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.266714088461!2d138.5935325!3d-34.9309582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf211ed83beb%3A0x923595bc00766a4f!2sThanh%20Thanh%20Vietnamese%20Restaurant!5e0!3m2!1sen!2sau!4v1710660000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-6">Thanh Thanh</h3>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Bringing the authentic taste of Vietnam to South Australia for over 20 years. Quality, tradition, and family at our heart.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-brand-wood">Quick Links</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-brand-wood">Contact Info</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-brand-red" /> 18 Field St, Adelaide</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-brand-red" /> 0882128788</li>
              <li className="flex items-center gap-3"><UtensilsCrossed size={18} className="text-brand-red" /> Dine-in & Takeaway</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-brand-red/10 border border-brand-red/30 p-6 rounded-2xl text-center inline-block">
              <Award size={48} className="text-brand-red mx-auto mb-3" />
              <span className="block text-2xl font-serif font-bold text-white">20 YEARS</span>
              <span className="text-xs uppercase tracking-widest text-brand-red font-bold">Of Excellence</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Thanh Thanh Vietnamese Restaurant. All rights reserved.</p>
          <p className="mt-2">Designed with passion for South Australian food lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Gallery />
        <Reviews />
        <OrderCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
