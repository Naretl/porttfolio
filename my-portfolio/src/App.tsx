import Homepage from './homepage';
import AboutMe from './aboutme';
import Skills from './skills';
import Project from './projects';
import Education from './education';
import Contact from './contact';
import Navbar from './navbar';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Homepage /></div>
      <div id="about-me"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Project /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
