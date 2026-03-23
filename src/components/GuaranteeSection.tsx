import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const GuaranteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="guarantee" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-wood/40 mb-8">
            <Shield className="w-7 h-7 text-wood" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Lifetime Guarantee
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Every piece we craft is backed by our original purchaser lifetime warranty.
            We stand behind our materials, our craftsmanship, and your satisfaction—for as long as you own your home.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-wood/30 rounded-sm">
            <div className="w-2 h-2 rounded-full bg-wood" />
            <span className="text-sm tracking-wide text-wood-light">Original Purchaser Warranty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
