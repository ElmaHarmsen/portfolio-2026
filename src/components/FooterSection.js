import Navigation from "./Navigation";
import linkedin from "../assets/icons/logo--linkedin.svg";
import github from "../assets/icons/logo--github.svg";

export default function FooterSection() {
  return (
    <>
      <div className="footersection-container">
        <a href="mailto:contact.elma@tuta.com" className="btn yellow">
          <h3>contact.elma@tuta.com</h3>
        </a>
        <div className="container-socials">
          <a href="https://www.linkedin.com/in/elma-harmsen/" target="blank">
            <img src={linkedin} className="logo" alt="logo linkedin" />
          </a>
          <a href="https://github.com/ElmaHarmsen" target="blank">
            <img src={github} className="logo" alt="logo github" />
          </a>
        </div>
      </div>
    </>
  );
}
