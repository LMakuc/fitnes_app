import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    type: any;
    text: string;

    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function SaveExerciseButton({className, type, text, onClick}: Props) {
    return(
        <button
            className = {className}
            type = {type}
            onClick = {onClick}
            >
                {text}
        </button>
    );
}

export default SaveExerciseButton;