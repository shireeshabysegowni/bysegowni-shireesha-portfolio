import React from 'react';
import { MapPin, Calendar, ExternalLink, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Edzola Technologies Private Limited',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Feb 2024 - Present',
      description: '',
      achievements: [
        'Led the end-to-end delivery of 3+ projects using agile methodologies, resulting in a 20 percent efficiency boost and 95 percent client satisfaction.',
        'Developed detailed dashboards with role-based access controls, enhancing security and user experience.',
        'Designed & Managed interactive dashboards to track and report key performance metrics, improving data-driven decision-making.',
        'Enhanced data visualization and user accessibility by creating custom dashboards, tailored to organizational needs.',
        'Optimized LEAP system workflows, improving efficiency and productivity, while seamlessly integrating learning modules for better tracking and performance measurement.',
        'Boosted API performance and reliability by optimizing endpoints, reducing response times.',
        'Engineered secure and scalable API solutions for enterprise applications, ensuring stability and future growth.'
      ],
      technologies: ['HTML', 'CSS', 'Javascript','React', 'Zoho Creator']
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A timeline of my professional journey and the impact I've made at each stage.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-slate-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-0`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-slate-800 z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase className="h-4 w-4 text-blue-400" />
                          <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-slate-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-slate-300">
                            <ExternalLink className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;