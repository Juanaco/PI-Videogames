import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = (props) => {
  return (
    <Link className={style.a} to="/detail"><div className={style.card}>
      <p>{props.name}</p>
      <img src={props.image} alt=""></img>
      
      <p>Platforms:{props.platforms}</p>
      <p>Release Date:{props.releaseDate}</p>
      <p>Rating:{props.rating}</p>
    </div></Link>
  );
};

export default Card