import { useState } from "react";
import { Clock } from "./Clock";

export function DuelingClock(props){
    const [primary, setPrimary] = useState(props.type/2);
    const [secondary, setSecondary] = useState(props.type/2);

    const tickPrimary = () => {

        if(primary > 0) setPrimary(primary-1);
        if(secondary < props.type) setSecondary(secondary+1);
    }
    const tickSecondary = () => {
            if(primary < props.type) setPrimary(primary+1);
            if(secondary > 0) setSecondary(secondary-1);
        
    }

    return (
        <div className="flex-shrink flex flex-wrap gap-6">
            <Clock flipped force type={props.type} segments={primary} decrement={tickSecondary} increment={tickPrimary}/>
            <Clock force type={props.type} segments={secondary} decrement={tickPrimary} increment={tickSecondary}/>
        </div>
    )
}