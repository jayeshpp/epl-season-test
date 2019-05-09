import * as actions from '../actions/teams';

const initialState = {
    name: "",
    clubs: []
}

export default function matchesReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_TEAMS_SUCCESS : {
            return {
                ...state,
                name: action.payload.name,
                clubs: action.payload.clubs
            }
        }
        default:{
            return state
        }
    }
}