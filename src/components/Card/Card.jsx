const Card = (props) => {
  return (
    <div>
      <h1>{props.key}</h1>
      <img src={props.thumbnail} alt="" />
      <h2>{props.title}</h2>
      <p>{props.short_description}</p>
    </div>
  )
}

export default Card;