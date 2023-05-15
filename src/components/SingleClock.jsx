import { useEffect, useState } from 'react';
import { Clock } from './Clock';

export function SingleClock(props){
    
    const [segments, setSegments] = useState(props.empty ? 0 : props.type);
    return(
        <Clock flipped={props.flipped} type={props.type} segments={segments} decrement={()=> setSegments(segments-1)} increment={()=> setSegments(segments+1)}/>
    )
}