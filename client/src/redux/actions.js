import axios from "axios";


export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";

export const getGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      "http://" + window.location.hostname + ":3001/videogames"
    );
    let games = apiData.data;

    dispatch({ type: GET_GAMES, payload: games });
  };
};

export const getGame = (id) =>{
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/videogames/${id}`
        );
        const game = apiData.data;
        dispatch({type: GET_GAME, payload: game});
    }
  }
