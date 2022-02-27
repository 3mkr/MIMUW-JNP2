import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { addProgress } from './components/clockProgress';
import SizedDiv from './components/SizedDiv';


/*
 *  I used component CircularProgressbar from https://www.npmjs.com/package/react-circular-progressbar
 */

export const Clock = ({clockData, clockChanger}) => (
    <div>
        <h3> {clockData.name} </h3>
        <h4> {"Ofiara: " + clockData.target} </h4>
        <h4> {"Typ akcji: " + clockData.type.name} </h4>
        <SizedDiv width={200} heigth={200}>
            <CircularProgressbar value={clockData.filled/clockData.max} maxValue={1} strokeWidth={10}/>
        </SizedDiv>
        <button onClick={() => addProgress(clockData, clockChanger, 1)}>+1</button>
        <button onClick={() => addProgress(clockData, clockChanger, 2)}>+2</button>
        <button onClick={() => addProgress(clockData, clockChanger, 3)}>+3</button>
        <button onClick={() => addProgress(clockData, clockChanger, 5)}>+5</button>
    </div>
);

export default Clock;