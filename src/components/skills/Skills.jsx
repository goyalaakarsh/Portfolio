import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Languages from "./ProgrammingLang";
import Design from "./Design";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Tech stack I pursue</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Languages />
        <Design />
      </div>
    </section>
  );
};

export default Skills;
