const Card = (props) => {
  return (
    <div className="card">
      <h1 className="card__rank">{props.rank + 1}</h1>
      <img src={props.thumbnail} alt="" className="card__thumbnail"/>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.short_description}</p>
    </div>
  )
}

export default Card;