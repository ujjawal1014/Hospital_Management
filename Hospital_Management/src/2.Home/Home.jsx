import Image1 from "./Photo1.jpg";
import Image2 from "./Photo2.jpg";
import Image3 from "./Photo3.jpg";
import "./Home.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  // JavaScript
  let i = 0;
  const images = [Image1, Image2, Image3];

  function On_Left() {
    let link = document.querySelector(".Home_Image");
    i--;
    i = (3 + i) % 3; // Correcting the calculation of index
    link.src = images[i];
  }

  function On_Right() {
    let link = document.querySelector(".Home_Image");
    i++;
    i = i % 3;
    link.src = images[i];
  }
  setInterval(On_Right, 6000);

  return (
    <>
      <div className="Home">
        <img className="Home_Image" src={Image1} alt="Home" />
        <div className="Home_Arrow_Right" onClick={On_Right}>
          <IoIosArrowForward />
        </div>
        <div className="Home_Arrow_Left" onClick={On_Left}>
          <IoIosArrowBack />
        </div>
      </div>
    </>
  );
}
