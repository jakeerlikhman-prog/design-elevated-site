import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import mudroomImg from "@/assets/portfolio-mudroom.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import wallbedImg from "@/assets/portfolio-wallbed.jpg";
import closetImg from "@/assets/portfolio-closet2.jpg";

const services = [
  { title: "Custom Closets", desc: "Walk-ins, reach-ins, and wardrobes tailored to your wardrobe and lifestyle.", img: closetImg },
  { title: "Kitchens", desc: "From cabinetry to islands—designed for how you cook and gather.", img: kitchenImg },
  { title: "Wall Beds", desc: "Space-saving elegance that transforms any room in seconds.", img: wallbedImg },
  { title: "Mudrooms", desc: "Organized entryways built to handle the busiest of families.", img: mudroomImg },
  { title: "Home Offices", desc: "Focused, beautiful workspaces that elevate productivity.", img: officeImg },
];

const ease = [0.16, 1, 0.3, 1];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-sm cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl font-medium text-linen mb-1">{service.title}</h3>
        <p className="text-linen/70 text-sm leading-relaxed max-w-xs">{service.desc}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight">Crafted for Your Life</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 max-w-4xl mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
