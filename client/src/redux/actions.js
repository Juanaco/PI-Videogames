import axios from "axios";

// guardar los strings en variables para typos
export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";

export const getGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      "https://api.rawg.io/api/games?key=58f5f3ddba1b442f8d24d98fcfeb532f"
    );
    const games = apiData.data.results;
    dispatch({ type: GET_GAMES, payload: games });
  };
};

export const getGame = (id) =>{
    return async function (dispatch) {
        const apiData = await axios.get(
            `https://api.rawg.io/api/games/${id}?key=58f5f3ddba1b442f8d24d98fcfeb532f`
        );
        const game = apiData.data;
        dispatch({type: GET_GAME, payload: game});
    }
  }
