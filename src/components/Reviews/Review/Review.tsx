import "./review.css"

export default function Review(props: ReviewType) {

    const ratingElems = []
    for(let i = 0; i < props.rating; ++i){
        ratingElems.push(<img key={i} src="./icons/star.svg" aria-hidden />)
    }

  return (
    <aside className="review">
        <h3 className="review-name">{props.name}</h3>
        <div className="review-rating">
            {ratingElems}
        </div>
        <p className="review-desc">{props.desc}</p>
    </aside>
  )
}
