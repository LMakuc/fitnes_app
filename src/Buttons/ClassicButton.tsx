import React, {MouseEvent} from 'react';

import './Buttons.css';

type Props = {
    className: string;
    id?: string;
    text: string;
    type?: any;

    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function ClassicButton({className, text, type, id, onClick}:Props){
    return(
        <button
            className={className}
            type={type}
            id={id}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default ClassicButton;