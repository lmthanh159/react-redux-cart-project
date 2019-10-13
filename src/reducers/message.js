import * as types from '../constances/ActionType';
import * as msg from '../constances/Message';

var initialState = msg.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MSG:{
            return action.message;
        }
        default: return state;
    }
};

export default message;