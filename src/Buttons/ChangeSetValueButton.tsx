import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    text: string;
    id: string;

    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function ChangeSetRepValue({className, text, id, onClick}: Props){
    return(
        <button
            className={className}
            id={id}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default ChangeSetRepValue;