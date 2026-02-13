import { useState } from "react";
import travelList from "../assets/travel-list.png";
import mapty from "../assets/mapty.png";
import forkify from "../assets/forkify.png";
import fynder from "../assets/fynder.png";

const allProjects = [
  {
    id: 1,
    name: "Travel List",
    skills: ["JavaScript", "React", "State"],
    description:
      "Project in The Ultimate React Course 2025: React, Next.js, Redux & More. Add items to your packing list, sort items by description or packed status, and check how many items you already have packed.",
    img: travelList,
    link: "#",
  },
  {
    id: 2,
    name: "Mapty",
    skills: [
      "JavaScript",
      "Class-based architecture",
      "Leaflet library",
      "Localstorage",
    ],
    description:
      "Project in The Complete JavaScript Course 2025: From Zero to Expert. Easily track your cycling and running workouts on a map, and record details like distance, duration, elevation gain and cadence.",
    img: mapty,
    link: "https://jscourse-mapty.netlify.app/",
  },
  {
    id: 3,
    name: "Forkify",
    skills: [
      "JavaScript",
      "Async await loading",
      "MVC architecture",
      "Localstorage",
    ],
    description:
      "Project in The Complete JavaScript Course 2025: From Zero to Expert. Search recipes, save and add your own favourite recipes to the collection, and adjust to match ingredients to your serving size.",
    img: forkify,
    link: "#",
  },
  {
    id: 4,
    name: "UI/UX Case Study",
    skills: ["Ideation", "Requirements", "Prototyping", "User testing"],
    description:
      "The objective of the project was to lower the environmental impact of modern consumer culture in fashion by extending garment life cycles through circular use in the Uppsala student community. The application encourages consumer-to-consumer garment reuse through locally organised clothing swap events.",
    img: fynder,
    link: "#",
  },
];

export default function Project() {
  const [projects, setProjects] = useState(allProjects);

  return (
    <>
      <ProjectsList projects={projects} />
    </>
  );

  function ProjectsList({ projects }) {
    return (
      <>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </>
    );
  }

  function Project({ project }) {
    return (
      <>
        <div className="project-container">
          <h2>{project.name}</h2>

          <div className="project-container__content">
            <div className="container">
              <div className="skills">
                {/* {project.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))} */}
                <p>{project.skills.map((skill) => skill).join(", ")}</p>
              </div>
              <p>{project.description}</p>
            </div>
            <a href={project.link} className="btn yellow">
              <h3>Open {project.name}</h3>
            </a>
          </div>
        </div>
        <div className="img-bg">
          <img src={project.img} className="img" alt={project.name} />
        </div>
      </>
    );
  }
}
