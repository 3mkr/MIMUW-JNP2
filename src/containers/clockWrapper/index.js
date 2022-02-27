import React from "react";
import { useDispatch } from "react-redux";

import { ClockForm } from "./clockForm/index";
import { Clock } from './clock/index';
import { setClock } from "./actions";

export const ClockWrapper = ({clockData}) => {
    const dispatch = useDispatch();
    
    const dispatchClockSet = (newClock) => {
        dispatch(setClock(newClock));
    }

    let clockyStuff;

    if (clockData.max !== 0) {
        clockyStuff = <Clock clockData={clockData} clockChanger={dispatchClockSet}/>;
    } else {
        clockyStuff = <ClockForm source={clockData.source} clockSetter={dispatchClockSet}/>
    }

    return(
        <div className={'clockWrapper'}>
            {clockyStuff}
        </div>
    );
};