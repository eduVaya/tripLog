import { v4 } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "./actionsConstant";

export const setAlertAction = (msg, type) => dispatch => {
    const id = v4();
    dispatch({
        type: SET_ALERT,
        payload: { id, msg, type }
    });
    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), 3000);
}   