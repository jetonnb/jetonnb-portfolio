"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-12 items-center mb-24"
        >
          <div className="w-full md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20">
              <Image
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={20} className="text-blue-500" />
              {portfolioData.personal.location}
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto relative border-l border-white/10 pl-8 md:pl-0 md:border-none">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 md:flex md:gap-8 relative"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 z-10" />
                {/* Center Line (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-4 bottom-[-48px] w-0.5 bg-white/10 -translate-x-1/2" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 relative bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={exp.logo} alt={exp.company} fill className="object-contain p-1" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <h4 className="text-blue-400">{exp.company}</h4>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-sm text-gray-500 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    {exp.description && <p className="text-gray-400 text-sm">{exp.description}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-start gap-4"
              >
                <div className="w-16 h-16 relative bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={edu.logo} alt={edu.institution} fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-blue-400 mb-2">{edu.institution}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all block"
              >
                <div className="relative h-40 w-full">
                  <Image src={cert.image} alt={cert.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Award className="text-blue-400" size={32} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1 line-clamp-2 min-h-[40px]">{cert.name}</h3>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
