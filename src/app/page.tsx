"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";
import { TechIcons } from "@/components/TechIcons";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic Background - Optimized */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[80px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[60px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
              Hello, I am
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              {portfolioData.personal.name}
            </h1>
            <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-[60px] flex justify-center items-center gap-2">
              <span>I am a</span>
              <Typewriter words={["Software Developer", "Frontend Specialist", "Tech Enthusiast", "Angular Developer"]} className="text-blue-500 font-semibold" />
            </div>
            
            <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
              {portfolioData.personal.bio.split(".")[0]}. 
              Building responsive and dynamic web applications with modern technologies.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                About Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={portfolioData.personal.cv}
                download
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>

            <div className="mt-16 flex justify-center gap-8">
              {portfolioData.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                >
                  {social.name === "LinkedIn" && <Linkedin size={28} />}
                  {social.name === "Facebook" && <span className="font-bold text-2xl">f</span>}
                  {social.name === "Instagram" && <span className="font-bold text-2xl">IG</span>}
                </a>
              ))}
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-400">Technologies I work with</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default min-w-[100px]"
              >
                {TechIcons[skill.name] || <div className="w-8 h-8 bg-gray-700 rounded-full" />}
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400">Some of my recent work</p>
            </div>
            <Link href="/projects" className="text-blue-500 hover:text-blue-400 hidden md:flex items-center gap-2 group">
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link href="/projects" className="px-6 py-3 bg-white/5 rounded-full text-white inline-flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
