import React from 'react';

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

function SaveExercise({savedExercises}:Props){
    console.log(savedExercises);
    
    return(
        <></>
    );
}

export default SaveExercise;