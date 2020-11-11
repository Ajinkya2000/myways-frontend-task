// Image Imports
import myWaysLogo from "../../images/myways-logo.png";

// Component Imports
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand">
          <img src={myWaysLogo} alt="brand" />
        </div>
        <NavLinks />
      </nav>
    </div>
  );
};

export default Navbar;
