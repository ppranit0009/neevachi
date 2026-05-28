import { motion } from 'framer-motion';

export function WhyChooseUsSection() {
  return (
    <section className="py-12 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose Neevachi Solutions?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            With over 5 years of experience in the tech industry, we combine cutting-edge technology with innovative solutions to bring your ideas to life. Our team of experts is dedicated to delivering high-quality, scalable, and efficient solutions that drive your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Expertise</h3>
            <p className="text-muted-foreground">Deep knowledge in robotics, IoT, and embedded systems.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground">Staying ahead with the latest technologies and trends.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Quality</h3>
            <p className="text-muted-foreground">Rigorous testing and quality assurance for reliable products.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
