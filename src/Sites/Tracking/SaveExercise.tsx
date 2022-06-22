import React from 'react';

/*type Props = {
    date: string;
    exercise: string;
    set: number;
    rep: number;
    weight: string;
}*/
//{date, exercise, set, rep, weight}: Props

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


//<p>Date: {date.getDate()}. {date.getMonth()}. {date.getFullYear()}</p>
function SaveExercise({savedExercises}:Props){
    console.log(savedExercises);
    
    
    
    return(
        <></>
    );
}

export default SaveExercise;

/*
<div>
            <p>Date: {date}</p>
            <p>Exercise: {exercise}</p>
            <p>Set: {set}</p>
            <p>Rep: {rep}</p>
            <p>Weight: {weight} kg</p>
        </div>*/