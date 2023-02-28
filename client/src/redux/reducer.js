import { GET_GAME, GET_GAMES, GET_GENRES, GET_PLATFORMS } from "../redux/actions/indexActions";

const initialState = {
  videoGames: [],
  gameDetails: [],
  genres: [],
  platforms: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      if(action.payload){
        return {
          ...state,
          videoGames: action.payload };
      }else{
        return{
          ...state,
          videoGames:[]
        };
      };
    case GET_GAME:
      return{
        ...state, 
        videoGames: action.payload
      };
      case GET_GENRES:
        let genre = action.payload;
        genre.unshift('All');
        return{
          ...state,
          genres: genre
        };
      case GET_PLATFORMS:
        return{
          ...state,
          platforms: action.payload
        };
    default:
      return { ...state };
  }
};

export default rootReducer;
