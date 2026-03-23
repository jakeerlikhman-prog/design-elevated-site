import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-closet.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import mudroomImg from "@/assets/portfolio-mudroom.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import wallbedImg from "@/assets/portfolio-wallbed.jpg";
import closetImg from "@/assets/portfolio-closet2.jpg";

const images = [
  { src: heroImg, alt: "Luxury walk-in closet with marble floors", tall: true },
  { src: kitchenImg, alt: "Modern custom kitchen with oak accents", tall: false },
  { src: mudroomImg, alt: "Custom mudroom with built-in cabinetry", tall: false },
  { src: wallbedImg, alt: "Elegant wall bed with warm wood accents", tall: true },
  { src: officeImg, alt: "Custom home office with built-in desk", tall: false },
  { src: closetImg, alt: "Walk-in closet with oak drawers", tall: false },
];

const ease = [0.16, 1, 0.3, 1];

const PortfolioSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">Portfolio</h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <PortfolioItem key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ img, index }: { img: typeof images[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.06 }}
      className="break-inside-avoid overflow-hidden rounded-sm group"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
    </motion.div>
  );
};

export default PortfolioSection;
