import axios from 'axios';

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE'

export const fetchTeams = () => {
    return function(dispatch) {
        return axios.get('../data/teams.json').then((response) => {            
            dispatch({
                type: FETCH_TEAMS_SUCCESS,
                payload: response.data
            });
        }).catch((err) => {
            dispatch({
                type: FETCH_TEAMS_FAILURE, 
                status : 500
            });
        })
    }
}