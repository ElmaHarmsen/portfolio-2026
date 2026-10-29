import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <img
          src={logo}
          alt="one red triangle one green triangle next to each other"
          className="logo"
        />
        <NavLink to="/" className={"btn highlight-on-hover"}>
          <h3>Projects</h3>
        </NavLink>
        {/* <div className="">
          <h3></h3>
        </div> */}
        <NavLink to="/about" className={"btn highlight-on-hover"}>
          <h3>About</h3>
        </NavLink>
        {/* <div className="btn highlight-on-hover">
          <h3>About</h3>
        </div> */}
        <NavLink to="/#footer" className="btn highlight-on-hover">
          <h3>Connect</h3>
        </NavLink>
      </div>
    </>
  );
}
