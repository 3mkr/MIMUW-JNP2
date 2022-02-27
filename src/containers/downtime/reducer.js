import { fromJS } from 'immutable';

import { NEXT_TURN} from './const';

export const TIME_REDUCER_NAME = 'Time';

const startingState = fromJS({
    gamesPlayed: 0
});

export const timeReducer = (state = startingState, action) => {
    switch (action.type) {
        case NEXT_TURN: {
            return state.update('gamesPlayed', (gamesPlayed) => (
                gamesPlayed + 1
            ));
        }
        default: {
            return state;
        }
    }
};