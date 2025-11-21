"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Images } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

interface ProjectProps {
  title: string;
  description: string;
  tech: string;
  image: string;
  link?: string | null;
  github?: string;
  date: string;
  gallery?: string[];
}

export function ProjectCard({ project, index, showImmediately = false }: { project: ProjectProps; index: number; showImmediately?: boolean }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (project.gallery && project.gallery.length > 0 && !project.link) {
      e.preventDefault();
      setIsGalleryOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showImmediately ? { opacity: 1, y: 0 } : undefined}
        whileInView={!showImmediately ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full"
        onClick={handleCardClick}
      >
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Floating Button */}
          <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center"
              >
                <ArrowUpRight size={20} />
              </Link>
            ) : project.gallery ? (
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center"
              >
                <Images size={20} />
              </button>
            ) : null}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/5 whitespace-nowrap ml-2">
              {project.date}
            </span>
          </div>
          
          <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {project.description || "A cool project showcasing my skills."}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.split(/[,|]/).map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium text-blue-200 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/10 group-hover:border-blue-500/30 transition-colors"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      {project.gallery && (
        <ImageModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={project.gallery}
          title={project.title}
          description={project.description}
        />
      )}
    </>
  );
}
