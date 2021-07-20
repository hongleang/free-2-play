import Card from '../Card/Card';

const CardWrapper = (props) => {
  return(
    <div>
      {
        props.gamesData.map( game => {
          return(
            <Card key={game.id.toString()} 
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