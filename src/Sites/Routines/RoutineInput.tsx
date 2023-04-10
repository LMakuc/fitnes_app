import React, {ChangeEvent} from 'react';

type props={
    className: string;
    type: string;
    value: string;
    name: string;

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RoutineInput({className, type, value, name, onChange}:props){
    return(
        <input
            className={className}
            type={type}
            value={value}
            name={name}
            onChange={onChange}/>
    );
}

export default RoutineInput;