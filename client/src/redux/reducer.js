import { GET_GAMES } from "./actions";

const initialState ={
    games:[{
		"id": 3498,
		"name": "Grand Theft Auto V",
		"platforms": [
			{
				"name": "PlayStation 5"
			},
			{
				"name": "Xbox Series S/X"
			},
			{
				"name": "PlayStation 4"
			},
			{
				"name": "PC"
			},
			{
				"name": "PlayStation 3"
			},
			{
				"name": "Xbox 360"
			},
			{
				"name": "Xbox One"
			}
		],
		"image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
		"releaseDate": "2013-09-17",
		"rating": 4.47,
		"created": false
	},
	{
		"id": 3328,
		"name": "The Witcher 3: Wild Hunt",
		"platforms": [
			{
				"name": "Xbox Series S/X"
			},
			{
				"name": "PlayStation 4"
			},
			{
				"name": "Nintendo Switch"
			},
			{
				"name": "PC"
			},
			{
				"name": "Xbox One"
			},
			{
				"name": "PlayStation 5"
			}
		],
		"image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
		"releaseDate": "2015-05-18",
		"rating": 4.66,
		"created": false
	},
	{
		"id": 4200,
		"name": "Portal 2",
		"platforms": [
			{
				"name": "Xbox 360"
			},
			{
				"name": "Linux"
			},
			{
				"name": "macOS"
			},
			{
				"name": "PlayStation 3"
			},
			{
				"name": "PC"
			},
			{
				"name": "Xbox One"
			}
		],
		"image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
		"releaseDate": "2011-04-18",
		"rating": 4.62,
		"created": false
	},
	{
		"id": 5286,
		"name": "Tomb Raider (2013)",
		"platforms": [
			{
				"name": "PlayStation 4"
			},
			{
				"name": "macOS"
			},
			{
				"name": "PC"
			},
			{
				"name": "Xbox One"
			},
			{
				"name": "Xbox 360"
			},
			{
				"name": "PlayStation 3"
			}
		],
		"image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
		"releaseDate": "2013-03-05",
		"rating": 4.05,
		"created": false
	},
	{
		"id": 4291,
		"name": "Counter-Strike: Global Offensive",
		"platforms": [
			{
				"name": "PC"
			},
			{
				"name": "Xbox 360"
			},
			{
				"name": "PlayStation 3"
			}
		],
		"image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
		"releaseDate": "2012-08-21",
		"rating": 3.56,
		"created": false
	},],
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_GAMES:
            return {...state, games: action.payload};
        default:
            return{...state};
    }

};

export default rootReducer;