import Data from "../Data/Data";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="bg-light py-3">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>

        <div className="row">
          {Data[0].skills.map((skill, index) => (
            <div className="col-md-4 col-6 mb-4">
  <div className="card skill-card h-100 shadow-sm">
    <img
      src={skill.img}
      alt={skill.name}
      className="card-img-top skill-img"
    />
    <div className="card-body text-center">
      <h6 className="fw-bold">{skill.name}</h6>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;