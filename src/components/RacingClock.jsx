import { useState } from "react";
import { Clock } from "./Clock";
import { SingleClock } from "./SingleClock";

export function RacingClock(props){

    return (
        <div className="flex-shrink flex flex-wrap gap-6">
            <SingleClock flipped empty type={props.type}/>
            <SingleClock flipped empty type={props.type}/>
        </div>
    )
}