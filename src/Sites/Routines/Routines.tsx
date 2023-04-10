import React, {useState, useEffect} from 'react';

import ImageButton from '../../Buttons/ImageButton';
import NewRoutine from './NewRoutine';

interface Routine  {
    routineName: string;
    muscleGroups: string[];
    exercises: {
        name: string; 
        muscleGroup: string;
    }[][];
}

function Routines(){
    const[addRoutineField, setAddRoutineField] = useState(false);
    
    const stringData = window.localStorage.getItem('savedRoutines');
    const data: Routine[] = stringData?JSON.parse(stringData) : [];
    const [routines, setRoutines] = useState<Routine[]>(data);

    useEffect(() => {
        window.localStorage.getItem('savedRoutines');
    },[routines])

    //const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
    function deleteRoutine(index: number) {
        const newRoutines = [...routines];
        newRoutines.splice(index, 1);
        setRoutines(newRoutines);
        window.localStorage.setItem('savedRoutines', JSON.stringify(newRoutines))
    }

    return(
        <div>
            <ImageButton
                className="Add-routine-button"
                text="Routines"
                id="addRoutine"
                type="button"
                altText="Add routine plus"
                imageClass="buttonIcon"
                onClick={() => setAddRoutineField(!addRoutineField)}/>

            {addRoutineField && 
                <NewRoutine/>
            }
            <br/>

            {routines.map((routine, routineIndex) => (
                <div key={routineIndex}>
                    <div>
                        <h1>{routine.routineName}</h1>
                        <button onClick={() => deleteRoutine(routineIndex)}>Delete</button>
                    </div>
                    {routine.muscleGroups.map((muscleGroup, muscleGroupIndex) => (
                        <div key={muscleGroupIndex}>
                            <h2>{muscleGroup}</h2>  
                            {routine.exercises[muscleGroupIndex].map((exercise, exerciseIndex) => (
                                <div key={exerciseIndex}>{exercise.name}</div>
                            ))}
                        </div>
                    ))}
                    <br/>
                </div>
            ))}
        </div>
    );
}

export default Routines;