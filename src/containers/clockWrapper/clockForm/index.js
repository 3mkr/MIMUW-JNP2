import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { factionsSelector } from '../../faction/selectors';
import { Suggestion } from '../suggestion/index.js';
import { emptyClock } from '../components/emptyClock.js';
import actionList from '../components/actionList.js';

export const ClockForm = ({source, clockSetter}) => {
    const [childClockState, setChildClockState] = useState({...emptyClock, source: source});

    const nameHandler = (event) => (
        setChildClockState({...childClockState, name: event.target.value})
    );
    
    const targetHandler = (value) => {
        setChildClockState({...childClockState, target: value});
    };

    const typeHandler = (value) => {
        const idx = actionList.findIndex(x => x.name === value);
        setChildClockState({...childClockState, type: {...actionList[idx]}});
    };

    const segmentsHandler = (event) => (
        setChildClockState({...childClockState, max: event.target.value})
    );

    return(
        <div className={'clockForm'}>
            <form>
                <h3>Nazwa zegara</h3>
                <TextField onChange={nameHandler} variant="outlined" color="secondary" style={{ width: 150, backgroundColor: "white" }}/>

                <h3>Cel akcji</h3>
                <Suggestion onChange={targetHandler} options={useSelector(factionsSelector).toJS()}/>

                <h3>Rodzaj akcji</h3>
                <Suggestion onChange={typeHandler} options={actionList}/>

                <h3>Ilość segmentów</h3>
                <TextField onChange={segmentsHandler} variant="outlined" color="secondary" type="number" style={{ width: 150, backgroundColor: "white" }}/>

                <br></br>
                <button type='button' onClick={() => clockSetter(childClockState)}>Stwórz Zegar</button>
            </form>
        </div>
    );
}