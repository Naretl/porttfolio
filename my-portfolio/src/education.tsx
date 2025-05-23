// src/components/Education.tsx
import './education.css';

const Education: React.FC = () => {
  const educationList = [
    {
      school: 'Machakos Primary School',
      course: 'KCPE Certificate',
      description: 'Scored 361 marks in the KCPE national examination.',
    },
    {
      school: 'Kitondo School',
      course: 'KCSE Certificate',
      description: 'Scored a B+ in the KCSE national examination.',
    },
    {
      school: 'Technical University of Mombasa',
      course: 'Bachelor of Science in Information Technology',
      description: 'Currently pursuing my degree with a focus on modern tech tools and programming.',
    },
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.school}</h3>
            <p><strong>{edu.course}</strong></p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;