import { GET_GAMES } from "./indexActions";
import axios from "axios";

export const getGames = () => {
    return async function (dispatch) {
      const apiData = await axios.get(
      
        "http://" + window.location.hostname + ":3001/videogames"
      );
      let games = apiData.data;
      dispatch({ type: GET_GAMES, payload: games });
    };
  };