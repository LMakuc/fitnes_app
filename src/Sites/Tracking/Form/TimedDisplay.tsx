import React, {useEffect} from 'react';

type props = {
    className: string
    text: string
    time: number
    show: boolean
    setShow: (v: boolean)=> void
}

function TimedDisplay({className, text, time, show, setShow}: props) {

    useEffect(()=>{
        if(show){
            setTimeout(()=>{
                setShow(false);
            }, time);
        }
    }, [show, time, setShow]);

    return(
        <div className={className}>
            {show &&
                <div>{text}</div>
            }
        </div>
    );
}

export default TimedDisplay;