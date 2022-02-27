import { fromJS } from 'immutable';

import { CHANGE_THEME, THEME } from './const';

export const MANAGER_REDUCER_NAME = 'Manager';

const startingState = fromJS({
    theme: THEME.LIGHT,
});

export const managerReducer = (state = startingState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return state.update('theme', (theme) => (
                theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            ));
        }
        default: {
            return state;
        }
    }
};