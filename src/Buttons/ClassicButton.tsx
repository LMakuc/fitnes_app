import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    text: string;
    type: any;

    onClick?: (e: MouseEvent) => void;
}

function ClassicButton({className, text, type, onClick}:Props){
    return(
        <button
            className={className}
            type={type}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default ClassicButton;