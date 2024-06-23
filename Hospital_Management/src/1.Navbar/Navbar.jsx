import Navbar_Dropdown from "./Navbar_Dropdown_Links";
import Navbar_Logo from "./Navbar_Logo";
import Navbar_Links from "./Navbar_Links";
import image from "./Navbar_Logo.jpg";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar_Content">
          <div className="Navbar_Waste_Box_Left"></div>
          <div className="Navbar_all_links">
            <Navbar_Links Link_Name={"Home"} />
            <Navbar_Links Link_Name={"Center of Excellence"} />
          </div>
          <Navbar_Logo className="Navbar_Logo_Center" image={image} />
          <div className="Navbar_all_links">
            <Navbar_Links Link_Name={"Academic And Research"} />
            <Navbar_Links Link_Name={"Emergency Case"} />
          </div>
          <div className="Navbar_Waste_Box_Right"></div>
        </div>
      </div>
    </>
  );
}
