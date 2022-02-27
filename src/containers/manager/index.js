import React from 'react';
import { useSelector} from 'react-redux';

import { factionsSelector } from '../faction/selectors';
import { gamesPlayedSelector } from '../downtime/selectors';
import { Factions } from '../faction/index';
import { DowntimeButton } from '../downtime';

export const Manager = () => {
    const factions = useSelector(factionsSelector);
    const turn = useSelector(gamesPlayedSelector);

    return (
        <div className="manager">
            <div className="factions">
                <ol><Factions factions={factions.toJS()}/></ol>
            </div>
            <div className="turns">
                <DowntimeButton factions={factions.toJS()} turn={turn}/>
                {"Faz przestoju do tej pory: " + turn}
            </div>
            
        </div>
    );
}
