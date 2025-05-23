// src/components/Projects.tsx
import './projects.css';
import martImage from './assets/mart.png';

const Projects: React.FC = () => {
  const projectList = [
    {
      name: 'Fiverr Freelance Work',
      description: 'Worked as a freelance virtual assistant.',
      technologies: 'Communication tools, research software',
      link: 'https://www.fiverr.com/login',
      linkLabel: 'Fiverr Profile',
    },
    {
      name: 'Upwork Freelance Work',
      description: 'Freelance content creator on Upwork.',
      technologies: 'SEO, writing tools, CMS platforms',
      link: 'https://www.upwork.com/ab/account-security/login',
      linkLabel: 'Upwork Profile',
    },
    {
      name: 'README Project',
      description: 'Created and uploaded a README.md file on GitHub.',
      technologies: 'Vite, React, TypeScript, Git',
      link: 'https://github.com/Naretl/wall-of-developers/tree/martin-kioko/engineering-division',
      linkLabel: 'View on GitHub',
    },
    {
      name: 'Pwani Innovation Week Website',
      description: 'Collaborated on a website using Vite + React + TS.',
      technologies: 'Vite, React, TypeScript, GitHub',
      link: 'https://github.com/Naretl/wall-of-developers/tree/martin-kioko/engineering-division',
      linkLabel: 'View on GitHub',
    },
    {
      name: 'Personal Portfolio',
      description: 'Building a personal portfolio with Vite + React + TS.',
      technologies: 'Vite, React, TypeScript, CSS',
      link: 'https://github.com/Naretl/wall-of-developers/tree/martin-kioko/engineering-division',
      linkLabel: 'View on GitHub',
      image: martImage
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkLabel}
            </a>
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt="Martin Luke Kioko"/>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;