import React, {MouseEvent} from 'react';

type Props = {
    className: string
    text: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void
}

function DeleteLocalStorageButton ({className, text, onClick}: Props){
    return(
        <button
            className={className}
            onClick={onClick}>
                {text}
        </button>
    );
}

export default DeleteLocalStorageButton;