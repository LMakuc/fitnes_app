import React, {useState, MouseEvent} from 'react';

import DumbBell from '../../Images/SpinningDumbBell';
import ClassicButton from '../../Buttons/ClassicButton';

import './ExerciseList.css';

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

    //const [exerciseDescription, setExerciseDescription] = useState("");

    return(
        <div className="ExercieList">
            <h1>{title}</h1>

            {exerciseNames.map((exerciseName, i) => (
                <div className="exercise" key={i}>
                    <div>
                        <ClassicButton
                            className="exercise-input-button"
                            text={exerciseName}
                            onClick={inputExerciseToForm}/>
                        
                        {exerciseDescriptions[i]}

                        <div className="spinningImage">
                            <DumbBell/>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default ExerciseList;

/*
            {exerciseNames.map((exerciseName, i) => (
                <div className="exercise" key={i}>
                    <div>
                        <ClassicButton
                            className="exercise-input-button"
                            text={exerciseName}
                            onClick={inputExerciseToForm}/>
                        
                        {exerciseDescriptions}

                        <div className="spinningImage">
                            <DumbBell/>
                        </div>
                    </div>
                </div>
            ))}


                	    {exerciseDescriptions.map((exerciseDescription, k) =>(   //v type-u odstranit ?
                            <div key={k}>
                                {i === k &&
                                    {exerciseDescription}
                            </div>
                        ))}
*/