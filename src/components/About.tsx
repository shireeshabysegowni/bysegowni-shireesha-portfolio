import React from "react";
import { Code, Palette, Zap, Users, Award, Target } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "Javascript", "React"],
      icon: Code,
      color: "from-blue-600 to-blue-700",
    },
    {
      category: "Styling",
      technologies: ["CSS", "CSS-in-JS"],
      icon: Palette,
      color: "from-purple-600 to-purple-700",
    },
    {
      category: "Tools",
      technologies: ["VS Code", "Postman"],
      icon: Zap,
      color: "from-orange-600 to-orange-700",
    },
    {
      category: "Collaboration",
      technologies: ["Git", "GitHub", "Jira", "Figma"],
      icon: Users,
      color: "from-teal-600 to-teal-700",
    },
  ];

  const achievements = [
    { number: "1", label: "Years Experience" },
    { number: "2", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            My name's Shireesha Bysegowni. I'm a Front End developer based in
            Bangalore, Andhra Pradesh. I am a dedicated Front-End Developer with
            a passion for creating user-friendly web applications. With
            experience in HTML, CSS, JavaScript, and React, I excel at
            collaborating with cross-functional teams to deliver high-quality
            products. My educational background in Commerce with Computer
            Applications complements my technical skills, and I am eager to
            leverage my expertise in future projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  My Journey
                </h3>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                I'm a frontend developer with around 1 year of experience,
                mainly working with React to build clean, responsive, and
                user-friendly web applications. I focus on writing good quality
                code, learning new technologies, and improving performance and
                user experience. I'm always eager to grow, explore modern web
                trends, and take on new challenges through real projects.
              </p>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                I specialize in React ecosystem, performance optimization, and
                creating maintainable codebases. When I'm not coding, you'll
                find me contributing to open source, mentoring junior
                developers, or exploring the latest web technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700/30 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1 md:mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Skills & Expertise
                </h3>
              </div>

              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skill.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-9 md:ml-11">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs md:text-sm rounded-full border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
