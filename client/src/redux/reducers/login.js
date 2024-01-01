import { INIT_STATE } from "../../constant";
import { getType, hideLogin, showLogin} from "../actions";

export default function loginReducer(state = INIT_STATE.login, action){
    switch(action.type) {
        case getType(showLogin):
            return {
                isShow: true
            };
        case getType(hideLogin):
            return {
                isShow: false
            };
        default:
            return state;
    }

}