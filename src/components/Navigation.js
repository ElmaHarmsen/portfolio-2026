import { NavLink, Link } from "react-router";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
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
        <div className="btn highlight-on-hover">
          <h3>Connect</h3>
        </div>
      </div>
    </>
  );
}
