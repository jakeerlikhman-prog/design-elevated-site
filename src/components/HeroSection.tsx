import { motion } from "framer-motion";
import heroImage from "@/assets/hero-closet.jpg";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Custom walk-in closet with warm oak millwork and marble floors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="container relative z-10 pb-20 md:pb-0 pt-24">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-wood-light text-sm tracking-[0.2em] uppercase mb-4"
          >
            Custom Millwork & Closets
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-linen leading-[1.1] tracking-tight mb-6"
          >
            Elevate Your Space
            <br />
            with Custom Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="text-linen/80 text-base md:text-lg max-w-md mb-8 leading-relaxed"
          >
            Bespoke millwork crafted for homes that demand nothing less than extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
            >
              Book a Consultation
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-linen/30 text-linen font-medium text-sm rounded-sm hover:bg-linen/10 transition-all duration-200 active:scale-[0.97]"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
