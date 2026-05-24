import { ArrowLeft, CheckCircle2, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetailTemp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 mb-6 group backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Automated Warehouse Robot</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-blue-100">
            Autonomous mobile robot for warehouse automation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Project Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop&q=80"
              alt="Automated Warehouse Robot"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our Automated Warehouse Robot is a cutting-edge solution designed to revolutionize inventory management and order fulfillment in large-scale warehouses. The robot utilizes advanced LIDAR and computer vision to navigate complex environments, avoiding obstacles and optimizing picking routes in real-time.
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Autonomous navigation in dynamic environments",
                    "Real-time inventory tracking",
                    "Multi-robot coordination",
                    "Cloud-based fleet management",
                    "Battery life: 12+ hours",
                    "Advanced obstacle detection"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {["ROS (Robot Operating System)", "LIDAR", "Computer Vision", "AI Pathfinding", "Python", "C++"].map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* How We Provide */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Provide</h2>
                <p className="text-gray-700 mb-8">We follow a systematic approach to ensure every project is delivered on time and exceeds expectations.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Zap className="w-6 h-6" />, title: "Planning", desc: "Detailed project planning and requirement analysis" },
                    { icon: <Users className="w-6 h-6" />, title: "Design", desc: "Innovative design and prototyping phase" },
                    { icon: <Clock className="w-6 h-6" />, title: "Development", desc: "Agile development with regular updates" },
                    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Testing", desc: "Comprehensive testing and quality assurance" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Client</span>
                    <p className="font-medium text-gray-900">Global Logistics Inc.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Duration</span>
                    <p className="font-medium text-gray-900">6 months</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Team Size</span>
                    <p className="font-medium text-gray-900">8 members</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Year</span>
                    <p className="font-medium text-gray-900">2024</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Have a similar project?</h3>
                <p className="text-blue-100 mb-4 text-sm">Let's discuss how we can help bring your idea to life.</p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-blue-700 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailTemp;
