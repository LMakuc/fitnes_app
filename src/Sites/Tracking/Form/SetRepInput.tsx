import React, {ChangeEvent} from 'react';

type Props = {
    className: string;
    type: string;
    id: string;
    value: number;
    name: string;
    
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SetRepInput({className, type, name, id, value, onChange}:Props){
    return(
        <input 
            className={className}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}/>
    );
}

export default SetRepInput;