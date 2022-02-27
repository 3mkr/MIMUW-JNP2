import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { MANAGER_REDUCER_NAME } from './reducer';

const getManagerReducerState = prop(MANAGER_REDUCER_NAME);

export const themeSelector = createSelector(
    getManagerReducerState,
    (manager) => manager.get('theme')
);

export const gifSelector = createSelector(
    getManagerReducerState,
    (manager) => manager.get('gifSrc')
);