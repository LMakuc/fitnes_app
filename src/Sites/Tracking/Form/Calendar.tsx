import React, { ChangeEvent } from 'react';

type Props = {
    className: string;
    type: string;
    id: string;
    value: string;
    
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DisplayCalendar({className, id, type, value, onChange}:Props){
    
    return(
        <input 
            className={className}
            type={type}
            id={id}
            value={value}
            onChange={onChange}/>
    );
}

export default DisplayCalendar;