
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Programming',
      items: 'Java, PHP',
    },
    {
      category: 'Web Development',
      items: 'HTML, CSS, JavaScript',
    },
    {
      category: 'Tools',
      items: 'Visual Studio Code, Google Workspace',
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.category}</h3>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;