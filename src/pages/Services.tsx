import { motion } from 'framer-motion';

import { Bot, Box, CircuitBoard, Cpu, Layers, Wifi, Zap, Truck, Wrench, Printer, Package } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "Robotics",
    description: "Custom robotics solutions for automation and innovation",
    features: ["Industrial Robotics", "Service Robots", "Collaborative Robots"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Advanced embedded system design and development",
    features: ["MCU Programming", "RTOS Development", "Hardware Integration"],
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Internet of Things for smart connectivity",
    features: ["IoT Platforms", "Sensor Networks", "Cloud Integration"],
  },
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description: "Professional PCB and circuit design services",
    features: ["Schematic Design", "PCB Layout", "Prototyping"],
  },
  {
    icon: Layers,
    title: "3D Engineering",
    description: "CAD modeling and 3D engineering solutions",
    features: ["CAD Design", "FEA Analysis", "Prototyping"],
  },
  {
    icon: Box,
    title: "3D Printing",
    description: "Rapid prototyping with advanced 3D printing",
    features: ["FDM Printing", "SLA Printing", "Multi-material"],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Efficient logistics and supply chain solutions",
    features: ["Inventory Management", "Logistics Optimization", "Vendor Coordination"],
  },
  {
    icon: Wrench,
    title: "Machining Services",
    description: "Precision engineering and machining services",
    features: ["CNC Machining", "Precision Parts", "Custom Fabrication"],
  },
  {
    icon: Printer,
    title: "3D Printing Services",
    description: "Rapid prototyping and production services",
    features: ["Rapid Prototyping", "Production Parts", "Custom Designs"],
  },
  {
    icon: Package,
    title: "Robotics Parts",
    description: "High-quality robotics components and parts",
    features: ["Motors & Actuators", "Sensors", "Controllers"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100 mb-8">
              Comprehensive technological solutions tailored to your needs
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              We specialize in Robotics, Embedded Systems, IoT, PCB Design, 3D Engineering, 
              and end-to-end prototyping solutions to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
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
              With over 5 years of experience in the tech industry, we combine cutting-edge technology with innovative solutions to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Expertise</h3>
              <p className="text-muted-foreground">Deep knowledge in robotics, IoT, and embedded systems.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">Staying ahead with the latest technologies and trends.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Quality</h3>
              <p className="text-muted-foreground">Rigorous testing and quality assurance for reliable products.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90">
              Contact us today to discuss your requirements and get a free consultation.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;