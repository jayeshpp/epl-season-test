import axios from 'axios';

export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS'
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE'

export const fetchMathes = () => {
    return function(dispatch) {
        return axios.get('../data/matches.json').then((response) => {            
            dispatch({
                type: FETCH_MATCHES_SUCCESS,
                payload: response.data
            });
        }).catch((err) => {
            dispatch({
                type: FETCH_MATCHES_FAILURE, 
                status : 500
            });
        })
    }
}