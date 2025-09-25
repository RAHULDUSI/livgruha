import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Modern Living Room',
      category: 'Residential',
      description: 'A sophisticated living space combining contemporary design with warm, inviting elements.',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      after: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Luxury Kitchen',
      category: 'Residential',
      description: 'Complete kitchen renovation featuring premium appliances and elegant finishes.',
      before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      after: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Executive Office',
      category: 'Commercial',
      description: 'Professional workspace designed for productivity and executive presence.',
      before: 'https://images.pexels.com/photos/159805/office-home-house-desk-159805.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      after: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Master Bedroom',
      category: 'Residential',
      description: 'Serene bedroom retreat with custom built-ins and luxurious textiles.',
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      after: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our collection of stunning transformations that showcase our expertise and attention to detail.
          </p>
        </div>

        {/* Current Project Display */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Before Image */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Before</h4>
              <img
                src={projects[currentProject].before}
                alt="Before transformation"
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>

            {/* After Image */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">After</h4>
              <img
                src={projects[currentProject].after}
                alt="After transformation"
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Project Info */}
          <div className="px-8 pb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {projects[currentProject].title}
                </h3>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {projects[currentProject].category}
                </span>
              </div>
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors">
                <span>View Details</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {projects[currentProject].description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevProject}
            className="flex items-center space-x-2 bg-white hover:bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-amber-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="flex items-center space-x-2 bg-white hover:bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center">
          <p className="text-slate-600">
            Project {currentProject + 1} of {projects.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;