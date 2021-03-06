import React, {MouseEvent} from 'react';

import './Buttons.css';

interface Props{
    className: string;
    text: string;
    type: any;

    onClick?: (e:MouseEvent) => void; 
}

function ChangeSiteButton({className, text, type, onClick}:Props){
    return(
        <button 
            className={className}
            onClick={onClick}
            type={type}>
                <b>{text}</b>
        </button>
    );
}

export default ChangeSiteButton;