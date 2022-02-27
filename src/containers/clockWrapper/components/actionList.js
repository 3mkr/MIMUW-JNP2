import { ACTION_PROFIT, ACTION_HARM } from "../const";

const actionList = [
    {
        name: 'Przejmij teren',
        profit: ACTION_PROFIT.TURF,
        harm: ACTION_HARM.TURF
    },
    {
        name: 'Popraw relacje',
        profit: ACTION_PROFIT.RELATIONS,
        harm:  ACTION_HARM.NONE
    },
    {
        name: 'Atak',
        profit: ACTION_PROFIT.NONE,
        harm: ACTION_HARM.POWER
    },
];

export default actionList;