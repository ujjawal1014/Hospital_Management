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
        <div className="Navbar_all_links">
          <Navbar_Links Link_Name={"Home"} />
          <Navbar_Links Link_Name={"Center of Excellence"} />
          <Navbar_Links Link_Name={"Academic And Research"} />
          <Navbar_Links Link_Name={"Emergency Case"} />
          <Navbar_Links Link_Name={"Contact us"} />
          {/* <Navbar_Dropdown
            Navbar_Dropdown_Heading={"Center of Excellence"}
            Navbar_Dropdown_Link1={"Link1"}
            Navbar_Dropdown_Link2={"Link2"}
            Navbar_Dropdown_Link3={"Link3"}
          />
          <Navbar_Dropdown
            Navbar_Dropdown_Heading={"Center of Excellence"}
            Navbar_Dropdown_Link1={"Link1"}
            Navbar_Dropdown_Link2={"Link2"}
            Navbar_Dropdown_Link3={"Link3"}
          />
          <Navbar_Dropdown
            Navbar_Dropdown_Heading={"Center of Excellence"}
            Navbar_Dropdown_Link1={"Link1"}
            Navbar_Dropdown_Link2={"Link2"}
            Navbar_Dropdown_Link3={"Link3"}
          /> */}

          <Navbar_Links />
        </div>
      </div>
    </>
  );
}
