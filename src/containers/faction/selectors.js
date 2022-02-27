import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { FACTIONS_REDUCER_NAME } from './reducer';

const getFactionsReducerState = prop(FACTIONS_REDUCER_NAME);

export const factionsSelector = createSelector(
    getFactionsReducerState,
    (state) => state.get('factions')
);