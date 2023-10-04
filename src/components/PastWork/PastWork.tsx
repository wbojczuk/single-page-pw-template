import "./pastwork.css"
import Carousel from "react-multi-carousel"
import pastWorkData from "./pastWorkData"

const responsive = {
    allScreens: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 0 },
        items: 1
      }
}

export default function PastWork() {

    const pastWorkElems = pastWorkData.map((data, i)=>{
        return <img className="past-work-img" src={data.src} alt={data.title} key={i} />
    })

  return (
    <section id="pastWorkSection">

        <div id="pastWorkWrapper">
            <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            >
            {pastWorkElems}
            </Carousel>
        </div>
    </section>
  )
}
