import { useState } from "react";
import { Clock } from "./Clock";

export function LinkedClock(props){


    const [primary, setPrimary] = useState(props.primary);
    const [secondary, setSecondary] = useState(props.secondary);
    const [resetSecondary, setResetSecondary] = useState(true);

    const tickPrimaryDown = () => {
        if(primary > 0) {
            setPrimary(primary-1);
        }
    }
    const tickPrimaryUp = () => {
        if(primary < props.primary) setPrimary(primary+1);
    }

    const tickSecondaryUp = () => {
        setSecondary(secondary+1);
    }

    const tickSecondaryDown = () => {
        if(secondary-1 <= 0){
            setPrimary(primary-1);
        }
        setSecondary(secondary-1);
    }

    const refill = () => {
        if(primary > 0) 
        setSecondary(props.secondary);
    }

    const reflush = () => {
        if(primary < props.primary)
        setSecondary(0);
    }

    return (
        <div className="flex-shrink flex flex-wrap gap-6">
            <Clock type={props.secondary} segments={secondary} decrement={tickSecondaryDown} increment={tickSecondaryUp} onEmpty={refill}/>
            <Clock fill={"#6b3e0a"} type={props.primary} segments={primary} increment={tickPrimaryUp} decrement={tickPrimaryDown} />
        </div>
    )
}