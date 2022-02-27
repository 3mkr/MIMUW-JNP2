import { store } from "../../../index";
import { emptyClock } from '../../clockWrapper/components/emptyClock';
import { setClock } from '../../clockWrapper/actions';
import { nextTurn } from '../actions';
import { dispatchClockResult } from '../../clockWrapper/clock/components/clockProgress';
import { setGif } from "../../manager/actions";

const roll = (dices) => {
    let results = Array(dices);
    for (let i = 0; i < dices; ++i) {
        results[i] = Math.floor(Math.random() * 6) + 1;
    }
    results = results.sort().slice(dices - 2, dices);
    if (results[1] === 6 && results[0] === 6)
        return 5;
    if (results[1] === 6)
        return 3;
    if (results[1] > 3)
        return 2;
    return 1;
};

const simulateDowntime = (factions, turn) => {
    store.dispatch(setGif(turn));
    factions.forEach((faction) => {
        if (faction.clock.max > 0) {
            const clockData = {...faction.clock};
            const result = roll(faction.tier);
            if (clockData.filled + result >= clockData.max) {
                dispatchClockResult(clockData);
                store.dispatch(setClock({...emptyClock, source: clockData.source}));
            } else {
                store.dispatch(setClock({...clockData, filled: clockData.filled + result}));
            }
        }
    });
    store.dispatch(nextTurn());
};

export default simulateDowntime;