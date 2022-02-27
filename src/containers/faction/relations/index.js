import React from 'react';
import { useDispatch } from 'react-redux';
import { GiCrossedSwords } from 'react-icons/gi';
import { BsShieldShaded } from 'react-icons/bs';

import Bond from './components/Bond';
import { improveRelation, worsenRelation } from '../actions';
import Info from '../components/Info';
import { Gif } from '../../gif';

export const Relations = ({relations, faction, idx}) => {
    const dispatch = useDispatch();

    const changeRelation = (sourceFaction, targetFaction, value) => {
        dispatch(value === 1 ? improveRelation(sourceFaction, targetFaction) : worsenRelation(sourceFaction, targetFaction));
    };

    let i = 0;
    
    return(
            Object.keys(relations).map((name) => (
            <div className={'rel'} key={i}>
                <li key={++i}>
                    <Bond relation={relations[name]}>
                        {name + ' Relacja ' + relations[name]}
                        <Info isVisible={relations[name] === -3 ? true : false}>
                            <GiCrossedSwords />
                        </Info>
                        <Info isVisible={relations[name] ===  3 ? true : false}>
                            <BsShieldShaded />
                        </Info>
                    </Bond>
                    <button onClick={() => changeRelation(faction, name,  1)}>+</button>
                    <button onClick={() => changeRelation(faction, name, -1)}>−</button>
                    <br></br>
                    <Info isVisible={relations[name] === 3 ? true : false}>
                        <Gif keyword='alliance' metaindex={idx} index={i} subindex={1}/>
                    </Info>
                    <Info isVisible={relations[name] === -3 ? true : false}>
                        <Gif keyword='war' metaindex={idx} index={i} subindex={2}/>
                    </Info>
                </li>
            </div>
        ))
    );
};