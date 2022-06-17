import React from 'react';

type Props = {
    date: string;
    exercise: string;
    set: number;
    rep: number;
    weight: string;
}
//<p>Date: {date.getDate()}. {date.getMonth()}. {date.getFullYear()}</p>
function SaveExercise({date, exercise, set, rep, weight}: Props){
    return(
        <div>
            <p>Date: {date}</p>
            <p>Exercise: {exercise}</p>
            <p>Set: {set}</p>
            <p>Rep: {rep}</p>
            <p>Weight: {weight} kg</p>
        </div>
    );
}

export default SaveExercise;