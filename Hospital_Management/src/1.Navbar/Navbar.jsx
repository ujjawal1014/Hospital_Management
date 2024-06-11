import Navbar_Dropdown from "./Navbar_Dropdown_Links";
import Navbar_Logo from "./Navbar_Logo";
import Navbar_Links from "./Navbar_Links";
import image from "./Navbar_Logo.jpg";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <Navbar_Logo image={image} />
        <div className="all_links">
          <Navbar_Links />
          <Navbar_Dropdown />
          <Navbar_Dropdown />
          <Navbar_Dropdown />
          <Navbar_Links />
        </div>
      </div>
    </>
  );
}
