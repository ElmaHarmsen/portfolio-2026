import svg from "../assets/icons/chevron-right.svg";
import Navigation from "./Navigation";

export default function HeroSection() {
  return (
    <>
      <div className="herosection-container">
        <h1 className="title">
          I enjoy bringing design and development together to better understand
          how people experience technology
        </h1>
        <div className="herosection-container__subsection">
          <div className="container">
            <p>
              Hi, my name is Elma. I work as a frontend developer and web
              designer in Sweden. I'm driven to the stories people create
              through their interactions with different kinds of interfaces and
              technologies. I aim to design user interfaces that feel reliable
              and intuitive, built with a solid foundation in human-computer
              interaction.
            </p>
          </div>
          {/* <div className="link">
            <img src={svg} alt="chevron forward" />
            <h2>contact.elma@tuta.com</h2>
          </div> */}
          <Navigation />
        </div>
      </div>
    </>
  );
}
