import React from 'react';

import './Images.css';

import dumbbell from '../Assets/DumbBell.png';

function DumbBell(){
    return(
        <img 
            src = {dumbbell}
            className="Dumbbell"
            alt="dumbbell"
            />
    );
}

export default DumbBell;