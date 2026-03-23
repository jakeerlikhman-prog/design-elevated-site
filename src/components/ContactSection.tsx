import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const serviceOptions = ["Custom Closets", "Kitchens", "Wall Beds", "Mudrooms", "Home Offices", "Other"];
const budgetOptions = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $30,000", "$30,000+", "Not sure yet"];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Get Started</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">Book a Consultation</h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Tell us about your project and we'll schedule a complimentary design consultation.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6 bg-secondary rounded-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Thank You</h3>
              <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow appearance-none"
              >
                <option value="" disabled>Service Type</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow appearance-none"
              >
                <option value="" disabled>Budget Range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your project…"
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:bg-charcoal-light transition-colors duration-200 active:scale-[0.98]"
              >
                Send Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
