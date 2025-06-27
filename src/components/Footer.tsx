import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Shireesha Bysegowni</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Shireesha</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shireesha Bysegowni. All rights reserved. | 
            <span className="ml-1">Software Developer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;