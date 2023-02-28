import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";
// import { useState } from "react";
const CardsContainer = () => {

  let games = useSelector(state=>state.videoGames)
  // games, setGames = useState([]);

  

  return (
    <div className={style.container}>
        {games.map(game=>{
            return <Card 
                id={game.id}
                name={game.name}
                // ********hay que ver como mostrar las plataformas***
                // platforms={game.platforms.map(plat=> plat.name).join(",")}
                image={game.image}
                releaseDate={game.releaseDate}
                rating={game.rating}
                />
        })}
    </div>
  );
};


export default CardsContainer