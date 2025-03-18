'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectTileProps {
  project: Project;
  flipped: boolean;
}

const ProjectTile = ({ project, flipped }: ProjectTileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${project.cssStyles.wrapper} ${
        flipped ? project.cssStyles.wrapper + '-sm' : ''
      } mx-3 my-3 p-4 rounded-2xl transition-all duration-300`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Content */}
        <div className={`space-y-6 ${flipped ? 'lg:order-2' : ''}`}>
          <h3 className={project.cssStyles.title}>{project.title}</h3>
          
          {/* Role & Supervisors */}
          <div className="space-y-2">
            <p className={`font-semibold ${project.cssStyles.content}`}>{project.role}</p>
            <div className={`text-sm ${project.cssStyles.content}`}>
              {project.supervisors.map((supervisor, index) => (
                <p key={index}>Supervised by {supervisor}</p>
              ))}
            </div>
          </div>

          {/* Publications */}
          {project.publications.length > 0 && (
            <div className="space-y-3">
              <h4 className={`font-semibold ${project.cssStyles.content}`}>Publications</h4>
              {project.publications.map((pub, index) => (
                <Link 
                  key={index}
                  href={pub.link}
                  className={project.cssStyles.links}
                  target="_blank"
                >
                  <div className="p-3 bg-white/50 rounded-lg shadow-sm hover:shadow transition-shadow">
                    <p className="font-medium">{pub.title}</p>
                    <p className="text-sm text-gray-600">
                      {pub.publisher} • {pub.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className={`font-semibold ${project.cssStyles.content}`}>Key Achievements</h4>
            {project.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-3 bg-white/50 rounded-lg shadow-sm"
              >
                <p className="font-medium">{achievement.title}</p>
                <p className={`text-sm ${project.cssStyles.content}`}>{achievement.description}</p>
                {achievement.grantor && (
                  <p className={`text-sm ${project.cssStyles.links} mt-1`}>
                    Granted by {achievement.grantor}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex gap-3">
            {project.tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.link}
                className="hover:scale-110 transition-transform"
                target="_blank"
              >
                <Image
                  src={`/assets/tech_logos/${tool.icon}`}
                  alt={tool.name}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Thumbnail */}
        <div className={`relative h-[300px] lg:h-[400px] ${flipped ? 'lg:order-1' : ''}`}>
          <Image
            src={`/assets/project_thumbnails/${project.thumbnail}`}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-lg p-4 bg-white/50"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;
