import "./Reviews.css"
import Review from "./Review/Review"
import reviewData from "./reviewData"
import LeaveReviewButton from "../LeaveReviewButton/LeaveReviewButton"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

export default function Reviews() {
    const reviewElems = reviewData.map((data, i)=>{
        return <Review key={i} {...data} />
    })
  return (
    <section id="reviewSection">
        <h2>Our Reviews</h2>
        <Carousel
        responsive={responsive}
        arrows={false}
        infinite
        autoPlay
        autoPlaySpeed={10000}
        >
            {reviewElems}
        </Carousel>
        <div id="leaveReviewWrapper">
            <LeaveReviewButton google="https://google.com" facebook="https://google.com"/>
        </div>
    </section>
  )
}
