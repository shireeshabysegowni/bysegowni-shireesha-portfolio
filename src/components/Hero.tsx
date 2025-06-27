import React from 'react';
import profileImage from "../assest/shireesha-profile-photo.jpeg";
import resumePdf from "../assest/resume/shireesha-bysegowni-software-engineer-resume.pdf";
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open(resumePdf, '_blank', 'noreferrer');
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-96 h-56 sm:h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto w-full">
          <div className="mb-8 mt-[80px] md:mt-0">
            <div className="w-28 sm:w-32 h-28 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-800 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Shireesha Bysegowni"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
          </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Shireesha Bysegowni
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            Software Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Crafting exceptional digital experiences with modern web technologies. Passionate about clean code,
            performance optimization, and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
            <div className="flex space-x-4">
              <a
                href="https://github.com/shireeshabysegowni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-slate-600 transition duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-slate-300 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/shireesha-bysegowni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-slate-600 transition duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-slate-300 hover:text-white" />
              </a>
              <a
                href="mailto:shireeshabysegownib@gmail.com"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-full border border-slate-700 hover:border-slate-600 transition duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-slate-300 hover:text-white" />
              </a>
            </div>

            <button
              onClick={handleResumeClick}
              className="mt-4 sm:mt-0 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
