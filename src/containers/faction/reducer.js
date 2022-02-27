import { fromJS } from 'immutable';

import { IMPROVE_POWER, WORSEN_POWER, HOLD, IMPROVE_RELATION, WORSEN_RELATION } from './const';

import { SET_CLOCK} from '../clockWrapper/const';
import factionsList from './components/factionList';

export const FACTIONS_REDUCER_NAME = 'Factions';

const startingState = fromJS({
    factions: factionsList
});

export const factionReducer = (state = startingState, action) => {
    switch (action.type) {
        case IMPROVE_RELATION: {
            return state
                .update('factions', (factions) => {
                    const idx = factions.findIndex(x => x.get('name') === action.factionA);
                    return factions.updateIn([idx, 'relations'], (relations) => {
                        let val = relations.get(action.factionB) + 1;
                        if (isNaN(val)) {
                            val = 1
                        }
                        return relations.set(action.factionB, val)
                    });
                })
                .update('factions', (factions) => {
                    const idx = factions.findIndex(x => x.get('name') === action.factionB);
                    return factions.updateIn([idx, 'relations'], (relations) => {
                        let val = relations.get(action.factionA) + 1;
                        if (isNaN(val)) {
                            val = 1
                        }
                        return relations.set(action.factionA, val)
                    });
                });
        }
        case WORSEN_RELATION: {
            return state
            .update('factions', (factions) => {
                const idx = factions.findIndex(x => x.get('name') === action.factionA);
                return factions.updateIn([idx, 'relations'], (relations) => {
                    let val = relations.get(action.factionB) - 1;
                    if (isNaN(val)) {
                        val = -1
                    }
                    return relations.set(action.factionB, val)
                });
            })
            .update('factions', (factions) => {
                const idx = factions.findIndex(x => x.get('name') === action.factionB);
                return factions.updateIn([idx, 'relations'], (relations) => {
                    let val = relations.get(action.factionA) - 1;
                    if (isNaN(val)) {
                        val = -1
                    }
                    return relations.set(action.factionA, val)
                });
            });
        }
        case SET_CLOCK: {
            return state.update('factions', (factions) => {
                const idx = factions.findIndex(x => x.get('name') === action.newClock.source);
                return factions.update(idx, (faction) => {
                    return faction.set('clock', action.newClock);
                });
            });
        }
        case IMPROVE_POWER: {
            return state.update('factions', (factions) => {
                const idx = factions.findIndex(x => x.get('name') === action.faction);
                return factions.update(idx, (faction) => {
                    if (faction.get('hold') === HOLD.S) {
                        return faction.set('hold', HOLD.M);
                    } else {
                        let newHold = HOLD.S;
                        let newTier = faction.get('tier') + 1;
                        return faction
                            .set('hold', newHold)
                            .set('tier', newTier);
                    }
                });
            });
        }
        case WORSEN_POWER: {
            return state.update('factions', (factions) => {
                const idx = factions.findIndex(x => x.get('name') === action.faction);
                return factions.update(idx, (faction) => {
                    if (faction.get('hold') === HOLD.M) {
                        return faction.set('hold', HOLD.S);
                    } else {
                        let newHold = HOLD.M;
                        let newTier = faction.get('tier') - 1;
                        return faction
                            .set('hold', newHold)
                            .set('tier', newTier);
                    }
                });
            });
        }
        default: {
            return state;
        }
    }
};