import React, {MouseEvent} from 'react';

interface Props{
    className: string;
    text: string;
    type: any;

    onClick?: (e: MouseEvent) => void; 
}

function MuscleGroupButton({className, text, type, onClick}:Props){
    return(
        <button
            className={className}
            type={type}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default MuscleGroupButton;