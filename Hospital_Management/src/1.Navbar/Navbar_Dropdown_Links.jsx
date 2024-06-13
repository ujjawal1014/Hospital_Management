export default function Navbar_Dropdown({
  Navbar_Dropdown_Heading,
  Navbar_Dropdown_Link1,
  Navbar_Dropdown_Link2,
  Navbar_Dropdown_Link3,
  Navbar_Dropdown_Link4,
  Navbar_Dropdown_Link5,
}) {
  return (
    <>
      <div className="Navbar_Dropdown">
        <label for="countries">{Navbar_Dropdown_Heading}</label>
        <select id="countries" name="countries">
          <option value="">{Navbar_Dropdown_Link1}</option>
          <option value="">{Navbar_Dropdown_Link2}</option>
          <option value="">{Navbar_Dropdown_Link3}</option>
          <option value="">{Navbar_Dropdown_Link4}</option>
          <option value="">{Navbar_Dropdown_Link5}</option>
        </select>
      </div>
    </>
  );
}
