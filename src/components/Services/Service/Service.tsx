import "./service.css"
import { useEffect, useState } from "react"

interface ServicePropType extends ServiceType{
  setCurrentServiceName: any,
  setCurrentServiceDesc: any
  setCurrentImg: any
  setIsDetailsPaneOpen: any
}



export default function Service(props: ServicePropType) {

  const [ctaText, setCtaText] = useState("Click For More")

  function triggerDetailsPane(){
    props.setCurrentServiceDesc(props.desc)
    props.setCurrentServiceName(props.title)
    props.setCurrentImg(props.imgSrc)
    props.setIsDetailsPaneOpen(true)
  }

  useEffect(()=>{
    if(window.matchMedia("(max-width: 649px)").matches){
      setCtaText("Tap For More")
    }
  }, [])

  return (
    <aside className="service">
        <img className="service-img" src={props.imgSrc} alt={`Image of ${props.title}`} />
        <h3 className="service-title">{props.title}</h3>
        <p className="service-desc">{props.shortDesc}</p>

        <button onClick={triggerDetailsPane} className="service-cta">{ctaText}</button>
    </aside>
  )
}
