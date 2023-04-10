import React from 'react'

import './Quotes.css';

type props={
    className: string
    quote: string;
}

function Quotes({quote, className}: props){
    return(
        <div style={{width: "100%", overflow: "hidden"}}>
            <div className={className}>
                {quote}
            </div>
        </div>
    );
}

export default Quotes;