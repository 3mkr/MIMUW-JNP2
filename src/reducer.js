import { combineReducers } from 'redux';

import { managerReducer, MANAGER_REDUCER_NAME } from './containers/manager/reducer'
import { timeReducer, TIME_REDUCER_NAME } from './containers/downtime/reducer';
import { factionReducer, FACTIONS_REDUCER_NAME} from './containers/faction/reducer';

export const Reducer =  () => {
    return combineReducers({
        [TIME_REDUCER_NAME]: timeReducer,
        [MANAGER_REDUCER_NAME]: managerReducer,
        [FACTIONS_REDUCER_NAME]: factionReducer
    });
};