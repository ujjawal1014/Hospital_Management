import Quick_Action_Card from "./Quick_Action_Card";
import { FaRegCalendarPlus } from "react-icons/fa";

import { TbCheckupList } from "react-icons/tb";
import { FaLaptopMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaHospital } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";

import "./Quick_Action.css";

export default function Quick_Action() {
  return (
    <>
      <div className="Quick_Action">
        <Quick_Action_Card
          Icon={<FaRegCalendarPlus />}
          Text={"Book Appointment"}
        />
        <Quick_Action_Card Icon={<TbCheckupList />} Text={"Health Check-up"} />
        <Quick_Action_Card Icon={<FaLaptopMedical />} Text={"Consult Online"} />
        <Quick_Action_Card Icon={<GiMedicines />} Text={"Buy Medicine"} />
        <Quick_Action_Card Icon={<FaHospital />} Text={"Find Hospital"} />
        <Quick_Action_Card Icon={<RiHealthBookFill />} Text={"Health Report"} />

        {/* <Quick_Action_Card Icon={} Text={}/>
        <Quick_Action_Card Icon={} Text={}/>
        <Quick_Action_Card Icon={} Text={}/>
        <Quick_Action_Card Icon={} Text={}/> */}
      </div>
    </>
  );
}
