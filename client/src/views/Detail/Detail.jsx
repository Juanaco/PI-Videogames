import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../../redux/actions";
import style from "./Detail.module.css"



const Detail =(props) =>{
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getGame(props.match.params.id));
    }, [dispatch]);
    
    var detail = useSelector((state) => state.gameDetails)
    
    console.log("detalle", detail)
    return (
      <div className={style.wrapper}>
        <div>
            <div>
                <h2>{detail.name} details</h2>
            </div>
            <img src= {detail.image} alt="Image" width='250px' heigth='300px' ></img>    
                <h3>Description</h3>
                <h5>{detail.description}</h5>
                <div>
                   <h4>{`Rating:   ${detail.rating}`} </h4>
                </div>
                <div>
                   <h4>{`Released date:  ${detail.released}`}  </h4>
                </div>               
                <h4>{`Platforms:  ${detail.platforms}`}</h4>
                <h4>{`Genres: ${detail.genres}`}</h4>
            
        </div>
      </div>
    );
};

export default Detail;