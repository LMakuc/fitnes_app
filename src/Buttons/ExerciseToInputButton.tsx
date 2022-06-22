import React, {MouseEvent} from 'react';

type Props = {
    className: string;
    text: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function ExerciseToInputButton({className, text, onClick}:Props){
    return(
        <div>
            <button
                className={className}
                onClick={onClick}>
                    {text}
            </button>
        </div>
    );
}

export default ExerciseToInputButton;