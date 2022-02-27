import React from 'react';

import simulateDowntime from './components/downtimeSimulation';

export const DowntimeButton = ({factions, turn}) => (
    <div className={'downtimeButton'}>
        <button onClick={() => simulateDowntime(factions, turn)}>Symuluj przestój</button>
    </div>
);
