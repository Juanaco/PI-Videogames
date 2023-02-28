

import axios from 'axios'
import { DELETE_GAME } from './indexActions';

export default function deletegame(payload) {
    return async function (dispatch){
        const result = await axios.post(`http://localhost:3001/videogames/delete/:${payload}`); 
        dispatch({type: DELETE_GAME, payload: result})                                                                                    
    }
}