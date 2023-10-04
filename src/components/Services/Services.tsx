import "./services.css"
import Service from "./Service/Service";
import serviceData from "./serviceData";
import { useState } from "react";
import DetailsPane from "../DetailsPane/DetailsPane";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

export default function Services() {

  const [currentServiceName, setCurrentServiceName] = useState("");
  const [currentServiceDesc, setCurrentServiceDesc] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);

    const serviceElems = serviceData.map((data, i)=>{
        return (<Service
          {...data}
          key={i} 
          setCurrentImg={setCurrentImg}
          setCurrentServiceName={setCurrentServiceName}
          setCurrentServiceDesc={setCurrentServiceDesc}
          setIsDetailsPaneOpen={setIsDetailsPaneOpen}
          />)
    })

  return (
    <>
    <DetailsPane
    img={currentImg}
    name={currentServiceName}
    desc={currentServiceDesc}
    setIsDetailsPaneOpen={setIsDetailsPaneOpen}
    isDetailsPaneOpen={isDetailsPaneOpen}
    />
    <section id="servicesSection">
        <h2 id="servicesTitle">Services</h2>
        {serviceElems}
    </section>
    </>
  )
}
