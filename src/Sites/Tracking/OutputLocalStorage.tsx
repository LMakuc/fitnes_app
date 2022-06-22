import React from 'react';

import './Tracking.css';

type Exercise = {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
}
type Props = {
    savedExercises: Exercise[];
}



function OutputLocalStorage({savedExercises}:Props){
    
    const outputData = savedExercises.map((outputExercise)=>
        <div className="output-exercise">
            <div>Date: {outputExercise.date.getDay()}. {outputExercise.date.getMonth()}. {outputExercise.date.getFullYear()}</div>
            <div>Exercise: {outputExercise.exercise} </div>
            <div>Rep: {outputExercise.rep}</div>
            <div>Set: {outputExercise.set}</div>
            <div>Weight: {outputExercise.weight}</div>
        </div>
    )

    return(
        
        <div>
            <div className="tracking-title">Exercise output</div>
            {true && 
                outputData
                
            }
            <div></div>
        </div>
    );
}

export default OutputLocalStorage;