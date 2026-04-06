import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Fernbrook Homes",
  "Fieldgate Homes",
  "Princess Margaret Homes",
  "Greenpark Group",
];

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 border-y border-border bg-secondary/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <p className="text-center text-xs tracking-[0.25em] uppercase text-muted-foreground mb-10">
          Trusted by Leading Home Builders
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
              >
                <span className="text-muted-foreground/60 font-display text-lg md:text-xl whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;
