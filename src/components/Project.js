import svg from "../assets/icons/chevron-right.svg";
import forkify from "../assets/forkify.png";

export default function Project() {
  return (
    <>
      <div className="project-container">
        <h1>Project</h1>
        <div className="project-container__content">
          <div className="container">
            <div className="skills">
              <p>Skill one</p>
              <p>Second skill</p>
              <p>Third</p>
            </div>
            <p>
              As part of The Complete JavaScript Course 2025: From Zero to
              Expert. Further description of project in three to four lines of
              text.
            </p>
          </div>
          <div className="link">
            <img src={svg} alt="chevron forward" />
            <h2>Open project</h2>
          </div>
        </div>
      </div>
      <div className="img-bg">
        <img src={forkify} className="img" alt="placeholder" />
      </div>
    </>
  );
}
