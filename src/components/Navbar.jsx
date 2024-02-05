import { Link } from "react-router-dom";
import Img from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Img} alt="home-icon" className="logo-img" />
      </Link>
    </nav>
  );
}

export default Navbar;
