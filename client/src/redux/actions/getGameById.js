// LISTA CON SU ACTION TYPE EN REDUCER
import { GET_GAME } from "./indexActions";
import axios from "axios";


export const getGame = (id) =>{
    return async function (dispatch) {
       try{ const apiData = await axios.get(
            `http://localhost:3001/videogames/${id}`
        );
        const game = apiData.data;
        dispatch({type: GET_GAME, payload: game});}
        catch(error){
            console.log('Error in Action: ', error)
        }
    }
  }
