'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

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
      whileHover={{ scale: 1.02 }}
      className={`${project.cssStyles.wrapper} ${
        flipped ? project.cssStyles.wrapper + '-sm' : ''
      } mx-3 my-3 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl backdrop-blur-sm`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Content */}
        <div className={`space-y-8 ${flipped ? 'lg:order-2' : ''}`}>
          {/* Title and Role */}
          <div className="space-y-3">
            <h3 className={`${project.cssStyles.title} text-3xl font-bold tracking-tight`}>
              {project.title}
            </h3>
            <p className={`font-medium ${project.cssStyles.content} text-lg`}>
              {project.role}
            </p>
          </div>
          
          {/* Role & Supervisors */}
          {project.supervisors.length > 0 && (
            <div className="space-y-3">
              <div className={`text-sm ${project.cssStyles.content}`}>
                {project.supervisors.map((supervisor, index) => (
                  <p key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9d5746]"></span>
                    Supervised by {supervisor}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {project.publications.length > 0 && (
            <div className="space-y-4">
              <h4 className={`font-semibold ${project.cssStyles.content} text-xl`}>Publications</h4>
              <div className="space-y-3">
                {project.publications.map((pub, index) => (
                  <Link 
                    key={index}
                    href={pub.link}
                    className={`${project.cssStyles.links} block`}
                    target="_blank"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-lg">{pub.title}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {pub.publisher} • {pub.year}
                          </p>
                        </div>
                        <FiExternalLink className="text-[#9d5746] text-xl" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          <div className="space-y-4">
            <h4 className={`font-semibold ${project.cssStyles.content} text-xl`}>Key Achievements</h4>
            <div className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="font-medium text-lg">{achievement.title}</p>
                  <p className={`text-sm ${project.cssStyles.content} mt-2`}>
                    {achievement.description}
                  </p>
                  {achievement.grantor && (
                    <p className={`text-sm ${project.cssStyles.links} mt-3 flex items-center gap-2`}>
                      <span className="w-2 h-2 rounded-full bg-[#9d5746]"></span>
                      Granted by {achievement.grantor}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          {project.tools.length > 0 && (
            <div className="space-y-4">
              <h4 className={`font-semibold ${project.cssStyles.content} text-xl`}>Technologies</h4>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.link}
                    className="group"
                    target="_blank"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <Image
                        src={`/assets/tech_logos/${tool.icon}`}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Thumbnail */}
        <div className={`relative h-[300px] lg:h-[400px] ${flipped ? 'lg:order-1' : ''}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-full w-full"
          >
            <Image
              src={`/assets/project_thumbnails/${project.thumbnail}`}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain rounded-xl p-4 bg-white/50 shadow-sm hover:shadow-md transition-all duration-300"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;
