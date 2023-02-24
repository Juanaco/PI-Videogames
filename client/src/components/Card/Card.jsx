import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={style.card}>
      <p><Link to="/detail">Name:{props.name}</Link></p>
      <p>{props.image}</p>
      {/*********hay que ver como mostrar las plataformas****/}
      <p>Platforms:{props.platforms}</p>
      <p>Release Date:{props.releaseDate}</p>
      <p>Rating:{props.rating}</p>
    </div>
  );
};

export default Card