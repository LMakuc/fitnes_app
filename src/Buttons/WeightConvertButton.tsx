import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    text: string;

    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function WeightConvertButton({className, text, onClick}:Props){
    return(
        <button
            className={className}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default WeightConvertButton;