import { useEffect } from 'react';

export function Clock(props){

    useEffect(()=> {
        if(props.segments >= props.type && props.onFull) props.onFull();
        if(props.segments == 0 && props.onEmpty) props.onEmpty();
    },[props.segments])

    const handleclick = (event) => {
        // event.stopPropagation();
        if(event.ctrlKey && props.increment) increment();
        else if(props.decrement) decrement();
    }

    const increment = () => props.segments < props.type || props.force ? props.increment() :  null;;
    const decrement = () => props.segments > 0 || props.force ? props.decrement()  : null;


    function generateClock(){
        switch(props.type){
            case 8:
                return(
                    <>
                    <path class="cls-1" d="M129.5,0A129.5,129.5,0,1,0,259,129.5,129.5,129.5,0,0,0,129.5,0Zm-88,48.62,75.89,75.88H10.11A118.51,118.51,0,0,1,41.54,48.62ZM10.11,134.5H117.43L41.54,210.39A118.54,118.54,0,0,1,10.11,134.5ZM124.5,248.89a118.54,118.54,0,0,1-75.89-31.43l75.89-75.89Zm0-131.46L48.61,41.55A118.55,118.55,0,0,1,124.5,10.11Zm124.39,7.07H141.57l75.89-75.88A118.57,118.57,0,0,1,248.89,124.5ZM134.5,10.11a118.5,118.5,0,0,1,75.88,31.44L134.5,117.43Zm0,238.78V141.57l75.88,75.89A118.49,118.49,0,0,1,134.5,248.89Zm83-38.5L141.57,134.5H248.89A118.59,118.59,0,0,1,217.46,210.39Z"/>
                    {props.segments < (props.flipped ? 8 : 1)? null:<path class="cls-2" d="M210.38,41.55,134.5,117.43V10.11A118.5,118.5,0,0,1,210.38,41.55Z"/>}
                    {props.segments < (props.flipped ? 7 : 2)? null:<path class="cls-2" d="M248.89,124.5H141.57l75.89-75.88A118.57,118.57,0,0,1,248.89,124.5Z"/>}
                    {props.segments < (props.flipped ? 6 : 3)? null:<path class="cls-2" d="M248.89,134.5a118.59,118.59,0,0,1-31.43,75.89L141.57,134.5Z"/>}
                    {props.segments < (props.flipped ? 5 : 4)? null:<path class="cls-2" d="M210.38,217.46a118.49,118.49,0,0,1-75.88,31.43V141.57Z"/>}
                    {props.segments < (props.flipped ? 4 : 5)? null:<path class="cls-2" d="M124.5,141.57V248.89a118.54,118.54,0,0,1-75.89-31.43Z"/>}
                    {props.segments < (props.flipped ? 3 : 6)? null:<path class="cls-2" d="M117.43,134.5,41.54,210.39A118.54,118.54,0,0,1,10.11,134.5Z"/>}
                    {props.segments < (props.flipped ? 2 : 7)? null:<path class="cls-2" d="M117.43,124.5H10.11A118.51,118.51,0,0,1,41.54,48.62Z"/>}
                    {props.segments < (props.flipped ? 1 : 8)? null:<path class="cls-2" d="M124.5,10.11V117.43L48.61,41.55A118.55,118.55,0,0,1,124.5,10.11Z"/>}
                    </>
                )
            case 6:
                return(
                    <>
                    <path class="cls-1" d="M129.5,0A129.5,129.5,0,1,0,259,129.5,129.5,129.5,0,0,0,129.5,0ZM10,129.5A118.88,118.88,0,0,1,23.56,74.11L119.5,129.5,23.56,184.89A118.88,118.88,0,0,1,10,129.5ZM124.5,248.89A118.65,118.65,0,0,1,45,214a120.57,120.57,0,0,1-16.43-20.45l95.93-55.39Zm0-128L28.57,65.45A120.57,120.57,0,0,1,45,45a118.65,118.65,0,0,1,79.5-34.89Zm10-110.73A118.65,118.65,0,0,1,214,45a120.57,120.57,0,0,1,16.43,20.45L134.5,120.84ZM214,214a118.65,118.65,0,0,1-79.5,34.89V138.16l95.93,55.39A120.57,120.57,0,0,1,214,214Zm-74.5-84.5,95.94-55.39a119.91,119.91,0,0,1,0,110.78Z"/>
                    {props.segments < (props.flipped ? 6 : 1)? null:<path class="cls-2" d="M230.43,65.45,134.5,120.84V10.11A118.65,118.65,0,0,1,214,45,120.57,120.57,0,0,1,230.43,65.45Z"/>}
                    {props.segments < (props.flipped ? 5 : 2)? null:<path class="cls-2" d="M249,129.5a118.88,118.88,0,0,1-13.56,55.39L139.5,129.5l95.94-55.39A118.88,118.88,0,0,1,249,129.5Z"/>}
                    {props.segments < (props.flipped ? 4 : 3)? null:<path class="cls-2" d="M230.43,193.55A120.57,120.57,0,0,1,214,214a118.65,118.65,0,0,1-79.5,34.89V138.16Z"/>}
                    {props.segments < (props.flipped ? 3 : 4)? null:<path class="cls-2" d="M124.5,138.16V248.89A118.65,118.65,0,0,1,45,214a120.57,120.57,0,0,1-16.43-20.45Z"/>}
                    {props.segments < (props.flipped ? 2 : 5)? null:<path class="cls-2" d="M119.5,129.5,23.56,184.89a119.91,119.91,0,0,1,0-110.78Z"/>}
                    {props.segments < (props.flipped ? 1 : 6)? null:<path class="cls-2" d="M124.5,10.11V120.84L28.57,65.45A120.57,120.57,0,0,1,45,45,118.65,118.65,0,0,1,124.5,10.11Z"/>}
                    </>
                )
            case 4:
            default:
                return(
                    <>
                    <path className="cls-1" d="M129.5,0A129.5,129.5,0,1,0,259,129.5,129.5,129.5,0,0,0,129.5,0Zm-5,248.89A119.48,119.48,0,0,1,10.11,134.5H124.5Zm0-124.39H10.11A119.48,119.48,0,0,1,124.5,10.11Zm10-114.39A119.48,119.48,0,0,1,248.89,124.5H134.5ZM214,214a118.65,118.65,0,0,1-79.5,34.89V134.5H248.89A118.65,118.65,0,0,1,214,214Z"/>
                    {props.segments < (props.flipped ? 4 : 1)? null:<path className="cls-2" d="M248.89,124.5H134.5V10.11A119.48,119.48,0,0,1,248.89,124.5Z"/>}
                    {props.segments < (props.flipped ? 3 : 2)? null: <path className="cls-2" d="M248.89,134.5A119.48,119.48,0,0,1,134.5,248.89V134.5Z"/>}
                    {props.segments < (props.flipped ? 2 : 3)? null:<path className="cls-2" d="M124.5,134.5V248.89A119.48,119.48,0,0,1,10.11,134.5Z"/>}
                    {props.segments < (props.flipped ? 1 : 4)? null:<path className="cls-2" d="M124.5,10.11V124.5H10.11A119.48,119.48,0,0,1,124.5,10.11Z"/>}
                    </>    
                )
            
        }
    }


    return(
        <div className={'flex-shrink w-48 ' +( props.fill ? "cl-dark" : "")} onClick={handleclick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259 259">
            {generateClock()}
        </svg>
        </div>
    )



}