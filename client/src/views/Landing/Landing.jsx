import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing =() =>{
    return(
        <>
            <h1>What game shall we play today?</h1>
            <div className={style.mainContainer}>
                <Link to="/home">GO HOME</Link>
            </div>

        </>
    )
};

export default Landing;