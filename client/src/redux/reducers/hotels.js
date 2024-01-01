import { INIT_STATE } from "../../constant";
import { getHotels, getType } from "../actions";

export default function HotelsReducer(state = INIT_STATE, action){
    switch(action.type) {
        case getType(getHotels.getHotelsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getHotels.getHotelsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getHotels.getHotelsFailure):
        return {
            ...state,
            isLoading: false,
        }
        default:
            return state;
    }

}