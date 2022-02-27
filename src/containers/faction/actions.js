import { ADD_FACTION, DELETE_FACTION, IMPROVE_RELATION, WORSEN_RELATION, IMPROVE_POWER, WORSEN_POWER } from "./const";

export const addFaction = (data) => ({
    type: ADD_FACTION,
    data
});

export const deleteFaction = (name) => ({
    type: DELETE_FACTION,
    name
});

export const improveRelation = (factionA, factionB) => ({
    type: IMPROVE_RELATION,
    factionA,
    factionB
});

export const worsenRelation = (factionA, factionB) => ({
    type: WORSEN_RELATION,
    factionA,
    factionB
});

export const improvePower = (faction, improve) => ({
    type: IMPROVE_POWER,
    faction
});

export const worsenPower = (faction, improve) => ({
    type: WORSEN_POWER,
    faction
});