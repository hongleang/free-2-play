import Card from '../Card/Card';

const CardWrapper = (props) => {
  return(
    <div className="card-wrapper">
      {
        props.gamesData.map( game => {
          return(
            <Card
                key={game.id.toString()}
                rank={props.gamesData.indexOf(game)} 
                title={game.title} 
                thumbnail={game.thumbnail} 
                description={game.short_description}
                url={game.game_url}
                genre={game.genre}
                platform={game.platform}
                publisher={game.publisher}
                detail={game.freetogame_profile_url}
            ></Card>
          )          
        })
      }
    </div>
  )  
}

export default CardWrapper;