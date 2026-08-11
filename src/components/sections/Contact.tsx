import { memo, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import { SplitText } from '../ui/SplitText';
import { fadeInUp, defaultViewport } from '../../utils/animations';

export const Contact = memo(() => {
  const { scrollY } = useScroll();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const yBg = useTransform(scrollY, [0, 4000], [0, 200]);
  const opacity = useTransform(scrollY, [3000, 3500], [0, 1]);
  
  const mouseX = useTransform(scrollY, [0, 1000], [0, 100]);
  const mouseY = useTransform(scrollY, [0, 1000], [0, 100]);

  const bgTransform = useMotionTemplate`translate(${mouseX}px, ${mouseY}px)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden" aria-labelledby="contact-heading">
      {/* Dynamic Background Parallax */}
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ transform: bgTransform }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[150px]" 
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest-premium text-blue-500 uppercase block mb-6 md:mb-8">What's Next?</span>
          
          <div className="flex justify-center mb-6 md:mb-8 overflow-hidden">
            <motion.h2 
              id="contact-heading"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-extrabold text-white tracking-tighter leading-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Let's create something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">extraordinary.</span>
            </motion.h2>
          </div>
          
          <SplitText 
            text="Whether you have a project in mind or just want to say hi, my inbox is always open."
            className="text-base sm:text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed justify-center px-4"
            delay={0.2}
          />
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 bg-[#0a0a0a]"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-70 group"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Direct Contact</h3>
              <a href="mailto:kashikashiraza6@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group text-lg md:text-xl break-all">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                  <Mail size={20} />
                </div>
                kashikashiraza6@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              <nav className="flex items-center gap-4" aria-label="Social Links">
                {[
                  { icon: <User size={20} aria-hidden="true" />, label: "GitHub", href: "https://github.com" },
                  { icon: <MessageSquare size={20} aria-hidden="true" />, label: "Twitter", href: "https://twitter.com" }
                ].map((social, i) => (
                  <Magnetic key={i}>
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
