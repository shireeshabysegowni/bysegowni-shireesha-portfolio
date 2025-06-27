import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shireeshabysegownib@gmail.com',
      href: 'mailto:shireeshabysegownib@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9347028527',
      href: 'tel:+919347028527'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'palamaner, AndhraPradesh',
      href: 'https://www.google.com/maps/place/Palamaner,+Andhra+Pradesh/data=!4m2!3m1!1s0x3bad7eaa422555ff:0xe0973a28f5397f55?sa=X&ved=1t:242&ictx=111'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shireeshabysegowni', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shireesha-bysegowni/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm currently open to full-time frontend development opportunities. If you're hiring or looking to collaborate on impactful projects, feel free to reach out—I’d love to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-slate-600 disabled:to-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Available for full-time positions. 
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;