import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { TIME_REDUCER_NAME } from './reducer';

const getTimerReducerState = prop(TIME_REDUCER_NAME);

export const gamesPlayedSelector = createSelector(
    getTimerReducerState,
    (state) => state.get('gamesPlayed')
);