import React from 'react';

import './BlankSite.css';

import Converter from './Converters/Converter';

function BlankSite(){
    return(
        <div className="blank-body">
            <div className="blank-title">
                Converters
            </div>
            <Converter/>

        </div>
    );
}

export default BlankSite;