import { emptyClock } from '../../components/emptyClock';
import { ACTION_PROFIT, ACTION_HARM } from "../../const";
import { worsenRelation, improvePower, worsenPower, improveRelation } from '../../../faction/actions'; 

import { store } from '../../../../index';

export const dispatchClockResult = (clockData) => {
    switch (clockData.type.profit) {
        case ACTION_PROFIT.POWER: {
            store.dispatch(improvePower(clockData.source));
            break;
        }
        case ACTION_PROFIT.RELATIONS : {
            store.dispatch(improveRelation(clockData.source, clockData.target));
            break;
        }
        case ACTION_PROFIT.TURF : {
            store.dispatch(worsenRelation(clockData.source, clockData.target));
            break;
        }
        default: {
            break;
        }
    }
    switch (clockData.type.harm) {
        case ACTION_HARM.TURF : {
            //something TODO
            break;
        }
        case ACTION_HARM.POWER : {
            store.dispatch(worsenPower(clockData.target));
            store.dispatch(worsenRelation(clockData.source, clockData.target));
            break;
        }
        default: {
            break;
        }
    }
};

export const addProgress = (clockData, clockChanger, add) => {
    if (clockData.filled + add >= clockData.max) {
        dispatchClockResult(clockData);
        clockChanger({...emptyClock, source: clockData.source});
    } else {
        clockChanger({...clockData, filled: clockData.filled + add});
    }
};