import Specilisation_Heading from "./Specilisation_Heading";
import Specilisation_Text_All_Icon_Card from "./Specilisation_Text_All_Icon_Card";
import Specilisation_Text_Photo from "./Specilisation_Text_Photo";
import { GiKidneys } from "react-icons/gi";
import Image1 from "./Image1.jpg";

import "./Specilisation.css";

export default function Specilisation() {
  return (
    <>
      <div className="Specilisation">
        <Specilisation_Heading />
        <div className="Specilisation_Text">
          <div className="Specilisation_Text_Photo_Main">
            <Specilisation_Text_Photo Image={Image1} />
          </div>
          <div className="Specilisation_All_Icon">
            
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
            <Specilisation_Text_All_Icon_Card
              Icon={<GiKidneys />}
              Text={"Cardiology"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
