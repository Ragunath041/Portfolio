import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Loan Scope',
    description: "Developed LoanScope, a fintech education platform that helps users understand loan processes and credit scores. Implemented secure user authentication using Firebase and created a CIBIL score prediction system with Python and Flask. Built an interactive education module featuring CRUD operations for admin users. Deployed the frontend on Firebase Hosting and the backend on Render, ensuring a seamless user experience.",
    tech: ['Flutter','Firebase','Python', 'Flask','Render'],
    github: 'https://github.com/Ragunath041/loanscope.git',
    liveLink: 'https://loanscope-9f38b.web.app/#/login'
  },
  {
    title: 'Study Repository',
    description: 'Study Repo is a web app that digitizes education by enabling teachers to upload materials and students to access them anytime, fostering seamless learning and collaboration.',
    tech: ['React', 'Springboot' , 'MongoDB'],
    github: 'https://github.com/Ragunath041/studyRepo.git'
    // liveLink: 'https://your-study-repo-live-link.com'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                    >
                      <FiGithub className="w-5 h-5 mr-2" />
                      <span>View Code</span>
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:underline"
                      >
                        Live Link <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
