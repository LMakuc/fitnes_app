import React from 'react';

import DumbBell from '../../Image/SpinningDumbBell';

import './ExerciseList.css';

type Props = {
    title: string;
    exerciseNames: string[];
}

function ExerciseList({title, exerciseNames,}:Props){
    return(
        <div className="ExercieList">
            <h1>{title}</h1>

            {exerciseNames.map((exerciseName, i) => (
                <div className="exercise" key={exerciseName}>
                    <div className="exerciseTitle">{i+1}. {exerciseName}</div>
                    <div className="spinningImage"><DumbBell/></div>
                </div>
            ))}
        </div>
    );
}

export default ExerciseList;