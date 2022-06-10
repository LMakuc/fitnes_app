import React, {MouseEvent} from 'react';

interface Props{
    className: string;
    id: string;
    text: string;
    type: any;

    onClick?: (e: MouseEvent<HTMLElement>) => void; 
}

function DisplayMuscleGroupButton({className, id, text, type, onClick}:Props){
    return(
        <button
            className={className}
            id={id}
            type={type}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default DisplayMuscleGroupButton;