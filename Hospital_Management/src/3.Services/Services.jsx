import Services_Card from "./Services_Card";
import Services_Heading from "./Services_Heading";
import image1 from "./Image1.jpg"
import image2 from "./Image2.jpg"
import image3 from "./Image3.jpg"
import "./Services.css"
export default function Services() {
  return (
    <>
      <div className="Services">
        <Services_Heading />
        <div className="All_Services_Card">
          <Services_Card image={image1} />
          <Services_Card image={image2} />
          <Services_Card image={image3} />
        </div>
      </div>
    </>
  );
}
