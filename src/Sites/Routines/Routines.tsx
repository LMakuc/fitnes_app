import React, {useState, useEffect} from 'react';

import './Routines.css';

import ImageButton from '../../Buttons/ImageButton';
import NewRoutine from './NewRoutine';
import Dumbbell from '../../Images/SpinningDumbBell';

interface Routine  {
    routineName: string;
    muscleGroups: string[];
    exercises: {
        name: string; 
        muscleGroup: string;
    }[][];
}

function Routines(){
    const [addRoutineField, setAddRoutineField] = useState(false);
    const [storedData, setStoredData] = useState<string | null>(null);
    const [routines, setRoutines] = useState<Routine[]>([]);

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const stringData = window.localStorage.getItem('savedRoutines');
        setStoredData(stringData);
    }, [refresh, addRoutineField]);

    useEffect(() => {
        if(storedData){
            const data: Routine[] = JSON.parse(storedData);
            setRoutines(data);
        }
    },[storedData]);

    function deleteRoutine(index: number) {
        const newRoutines = [...routines];
        newRoutines.splice(index, 1);
        setRoutines(newRoutines);
        window.localStorage.setItem('savedRoutines', JSON.stringify(newRoutines))
    }

    const toggleAddRoutineField = () =>{
        setAddRoutineField(prevState => !prevState);
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
                onClick={() => {
                    //setAddRoutineField(!addRoutineField);
                    toggleAddRoutineField();
                    setRefresh(!refresh);
                    }}/>

            {addRoutineField && 
                <NewRoutine
                    toggleAddRoutineField={toggleAddRoutineField}/>
            }
            <br/>

            {routines.map((routine, routineIndex) => (
                <div key={routineIndex}>
                    <div>
                        <div className="headline1">{routine.routineName}</div>
                        <button className="delete-routine-button" onClick={() => deleteRoutine(routineIndex)}>Delete</button>
                    </div>
                    <div className="routine-list">
                        {routine.muscleGroups.map((muscleGroup, muscleGroupIndex) => (
                            <div key={muscleGroupIndex}>
                                <div className="headline2">{muscleGroup}</div>  
                                {routine.exercises[muscleGroupIndex].map((exercise, exerciseIndex) => (
                                    <div key={exerciseIndex}>{exercise.name}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="spinning-dumbbell">
                        <Dumbbell/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Routines;