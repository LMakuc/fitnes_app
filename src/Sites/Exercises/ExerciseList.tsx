import React, {useState, MouseEvent} from 'react';

import DumbBell from '../../Images/SpinningDumbBell';
import ExerciseToInputButton from '../../Buttons/ExerciseToInputButton';

import './ExerciseList.css';

type Props = {
    title: string;
    exerciseNames: string[];
}

function ExerciseList({title, exerciseNames}:Props){
    
    const [exerciseName, setExerciseName] = useState("");
    function inputExerciseToForm(e: MouseEvent<HTMLElement>) {
        setExerciseName(e.currentTarget.textContent as string);
    }
    console.log(exerciseName);

    return(
        <div className="ExercieList">
            <h1>{title}</h1>

            {exerciseNames.map((exerciseName, i) => (
                <div className="exercise" key={exerciseName}>
                    <ExerciseToInputButton
                        className="exercise-input-button"
                        text={(i+1)+(". ")+exerciseName}
                        onClick={inputExerciseToForm}/>
                    <div className="spinningImage"><DumbBell/></div>
                </div>
            ))}
        </div>
    );
}

export default ExerciseList;

//<div className="exerciseTitle">{i+1}. {exerciseName}</div>