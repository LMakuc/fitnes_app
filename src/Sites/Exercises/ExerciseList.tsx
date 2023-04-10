import React, {useState, MouseEvent} from 'react';

import DumbBell from '../../Images/SpinningDumbBell';
import ClassicButton from '../../Buttons/ClassicButton';

import './ExerciseList.css';
import '../../App.css';

type displayExercise = {
    title: string;
    exerciseNames: string[];
    exerciseDescriptions: string[];
}

function ExerciseList({title, exerciseNames, exerciseDescriptions}: displayExercise){
    
    const [exerciseName, setExerciseName] = useState("");
    function inputExerciseToForm(e: MouseEvent<HTMLElement>) {
        setExerciseName(e.currentTarget.textContent as string);
    }

    console.log(exerciseName);

    return(
        <div className="ExercieList">
            <h1>{title}</h1>

            {exerciseNames.map((exerciseName, i) => (
                <div className="exercise" key={i}>
                    <ClassicButton
                        className="exercise-input-button"
                        text={exerciseName}
                        onClick={inputExerciseToForm}/>
                    
                    <div className="text-background">
                        {exerciseDescriptions[i]}
                    </div>

                    <div className="spinningImage">
                        <DumbBell/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExerciseList;