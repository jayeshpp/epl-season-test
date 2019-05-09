import { combineReducers } from 'redux'

import matches from './matches'
import teams from './teams'

export default combineReducers({
    matches,
    teams
})
