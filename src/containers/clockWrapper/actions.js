import { SET_CLOCK } from './const';

export const setClock = (newClock) => ({
    type: SET_CLOCK,
    newClock
});