import React, {useState} from 'react';

import { ClockWrapper } from '../clockWrapper/index';
import { Button, Info, StyledFaction } from './components/index';
import { Relations } from './relations';

export const Factions = ({factions}) => {
    const [isVisible, setIsVisible] = useState([false]);
    const handleClick = (id, isVisible) => {
        const newIsVisible = [...isVisible];
        newIsVisible[id] = !newIsVisible[id];
        setIsVisible(newIsVisible);
    };

    return(
        factions.map((x, i) => {
            const name = 'faction';
            const details = name + '_details';
            const button_text = isVisible[i] ? 'Pokaż mniej' : 'Pokaż więcej';
            
            return(
                <li key={i}>
                    <StyledFaction className={name} key={i}>
                        {factions[i].name}
                        &nbsp;&nbsp;&nbsp;
                    </StyledFaction>
                    <Button onClick={() => handleClick(i, isVisible)}> {button_text} </Button>
                    <Info isVisible={isVisible[i]}>
                        <div className={details} key={i}>
                            {'Grupa: ' + factions[i].group} <br></br>
                            {'Krąg: ' + factions[i].tier} <br></br>
                            {'Kontrola: ' + factions[i].hold} <br></br>
                            {'Relacje: '}
                            <ol><Relations relations={factions[i].relations} faction={factions[i].name} idx={i}/></ol>
                            <br></br>

                            <ClockWrapper clockData={factions[i].clock}/>
                            <br></br>
                        </div>
                    </Info>
                </li>
            );
        })
    );
};
