import React from 'react';
import lifeBirdImage from "../assest/lifebird-image.png";
import prettyPetalsImage from "../assest/pretty-petals-image.png";
import { ExternalLink, Github, Star, Users, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'LifeBird',
      description: 'LifeBird is an online doctor consultancy website so that user can easily connect with Doctors',
      image: lifeBirdImage,
      technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
      features: ['User Authentication', 'Location-Based Access', 'Doctor Search & Filters', 'Mobile responsive'],
      stats: { stars: 2, contributors: 1, duration: '1 month' },
      liveUrl: 'https://github.com/shireesha93470/LifeBird.git',
      githubUrl: 'https://github.com/shireesha93470/LifeBird.git',
      status: 'Live'
    },
    {
      title: 'Pretty Petal Store',
      description: 'An online store for selling stunning bridal bouquets and arrangements for special occasions (e-commerce store)',
      image: prettyPetalsImage,
      technologies: ['HTML', 'CSS', 'Javascript', 'JSON-SERVER'],
      features: ['User Authentication', 'Product Exploration', 'Search & Filter Options', 'Pagination'],
      stats: { stars: 6, contributors: 4, duration: '1 months' },
      liveUrl: 'https://theprettypetals.netlify.app/',
      githubUrl: 'https://github.com/Appy26/ThePrettyPetals',
      status: 'Live'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development and user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-slate-400 text-sm">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-between gap-3 mb-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.stats.contributors}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{project.stats.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-3 gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm border border-slate-600/50 hover:border-slate-500/50"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shireeshabysegowni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View more projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
