'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOpenInNew, MdFilterList } from 'react-icons/md';
import ProjectTile from './utils/ProjectTile';
import { PROJECTS_LISTS, QUIET_NODE_GITHUB_LINK } from '../../utils/constants';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleShowMoreClick = () => {
    setShowMore(true);
    if (showMore) {
      window.open(QUIET_NODE_GITHUB_LINK, '_blank', 'noreferrer');
    }
  };

  const filteredProjects = PROJECTS_LISTS.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section
      className='relative z-10 overflow-hidden scrollbar-hidden bg-gradient-to-t xmmd:bg-gradient-to-l from-[#EFD8C9] to-[#f8ad7b]
                -top-40
                xsm:-top-48
                md:-top-40
                lg:-top-52'
    >
      {/* container */}
      <div
        className='flex flex-col items-center
                mt-28
                xsm:mt-32
                md:mt-28
                xmmd:gap-0
                lg:mt-36'
      >
        {/* header */}
        <div className="w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className='text-4xl sm:text-5xl font-black text-[#9d5746] mb-4'>
              Projects & Achievements
            </h2>
            <p className="text-lg text-[#9d5746]/80 max-w-2xl mx-auto">
              A showcase of my work, research, and accomplishments in the field of technology and innovation.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <MdFilterList className="text-2xl text-[#9d5746]" />
            <div className="flex gap-2">
              {['all', 'research', 'development', 'design'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${filter === category 
                      ? 'bg-[#9d5746] text-white shadow-md' 
                      : 'bg-white/50 text-[#9d5746] hover:bg-white/80'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* body - projects */}
        <div className='flex flex-col w-full max-w-7xl px-6'>
          {/* Projects Grid */}
          <div className="space-y-8">
            {filteredProjects.slice(0, showMore ? undefined : 5).map((project) => (
              <ProjectTile
                key={project.id}
                project={project}
                flipped={project.id % 2 !== 0}
              />
            ))}
          </div>

          {/* Show More button */}
          {!showMore && filteredProjects.length > 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={handleShowMoreClick}
                className="px-8 py-3 bg-[#9d5746] text-white rounded-full font-medium
                         hover:bg-[#9d5746]/90 transition-all duration-300 shadow-md
                         hover:shadow-lg flex items-center gap-2"
              >
                Show More Projects
                <MdOpenInNew className="text-xl" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
