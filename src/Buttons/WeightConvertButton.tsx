import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    text: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function WeightChangeButton({className, text, onClick}:Props){
    return(
        <button
            className={className}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default WeightChangeButton;