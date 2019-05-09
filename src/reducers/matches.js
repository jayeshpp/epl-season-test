import * as actions from '../actions/matches';

const initialState = {
    name: "",
    rounds: []
}

export default function matchesReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_MATCHES_SUCCESS : {
            return {
                ...state,
                name: action.payload.name,
                rounds: action.payload.rounds
            }
        }
        default:{
            return state
        }
    }
}