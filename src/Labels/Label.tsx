import React from 'react';

type Props = {
    className: string;
    text: string;
}

function Label({className,text}:Props){
    return(
        <label
            className={className}>
                <span>{text}</span>
        </label>
    );
}

export default Label;