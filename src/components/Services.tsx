import React from 'react';
import { Home, Building, Palette, Lightbulb, Sofa, ChefHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home makeovers from concept to completion',
      features: ['Living Rooms', 'Bedrooms', 'Bathrooms', 'Home Offices']
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Professional environments that inspire productivity',
      features: ['Offices', 'Restaurants', 'Retail Stores', 'Hotels']
    },
    {
      icon: ChefHat,
      title: 'Kitchen Renovation',
      description: 'Transform your kitchen into a culinary masterpiece',
      features: ['Layout Planning', 'Cabinet Design', 'Appliance Selection', 'Lighting']
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that perfectly fit your space',
      features: ['Custom Pieces', 'Space Planning', 'Color Coordination', 'Styling']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Create the perfect ambiance with strategic lighting',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lights', 'Smart Controls']
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color schemes that enhance your space',
      features: ['Paint Selection', 'Color Psychology', 'Material Matching', 'Trend Analysis']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final installation, we offer comprehensive interior design services tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-amber-200"
            >
              <div className="bg-amber-100 group-hover:bg-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-amber-100 mb-6">Let's discuss how we can transform your space into something extraordinary.</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-amber-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;