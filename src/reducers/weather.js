/**
 * Created by Leoni on 7/27/2017.
 */
import {FETCH_WEATHER} from "../actions/index"

export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];  // return new instance of state. same as return state.concat([action.payload.data]);

    }

    return state;
}