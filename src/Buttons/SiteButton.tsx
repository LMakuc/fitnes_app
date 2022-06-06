import React from 'react';

import './Buttons.css';

interface Props{
    className: string;
    text: string;
    type: any;
}

function SiteButton({className, text, type}:Props){
    return(
        <div>
            <button 
                className={className}
                type={type}>
                    <b>{text}</b>
            </button>
        </div>
    );
}

export default SiteButton;