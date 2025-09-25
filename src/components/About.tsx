import React from 'react';
import { Award, CheckCircle, Heart, Lightbulb, Palette } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passionate Design',
      description: 'Every project is crafted with love and attention to detail'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Creative approaches to transform any space beautifully'
    },
    {
      icon: Palette,
      title: 'Personal Style',
      description: 'Tailored designs that reflect your unique personality'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Crafting Beautiful Spaces for
              <span className="text-amber-600"> 6 Years</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Since 2018, LIVGRUHA has been transforming homes and commercial spaces with our signature blend of functionality and aesthetic excellence. Our journey began with a simple mission: to create interiors that inspire and delight.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Residential & Commercial Design',
                'Complete Space Planning & Renovation',
                'Custom Furniture & Lighting Solutions',
                'Project Management from Start to Finish'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Designer at work"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Award Winning</p>
                  <p className="text-sm text-slate-600">Design Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;