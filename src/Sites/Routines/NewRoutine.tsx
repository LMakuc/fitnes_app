import React, { useState, ChangeEvent, useEffect } from "react";

import './Routines.css';

import Label from "../../Labels/Label";
import TimedDisplay from "../Tracking/Form/TimedDisplay";
import ClassicButton from "../../Buttons/ClassicButton";


type routines={
    routineName: string;
    muscleGroups: Array<string>;
    exercises: Array<Array<{name: string}>>;
}

function NewRoutine() {
    const [routineName, setRoutineName] = useState("");
    const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
    const [exercises, setExercises] = useState<Array<Array<{name: string}>>>([]);

    //states for validation - validation in handleInputChange
    const [exercisesBool, setExercisesBool] = useState(false);
    useEffect(() => {
        const isEmpty = exercises.some((group) =>
          group.some((exercise) => exercise.name === "")
        );
        setExercisesBool(!isEmpty);
      }, [exercises]);
      
    //validations of the routineName and muscleGroup input
    const [muscleGroupBool, setMuscleGroupBool] = useState(false);
    useEffect(() => {
        let isValid = true;
        muscleGroups.forEach((group) => {
            if(group === ""){
                isValid = false;
            }
        })
        setMuscleGroupBool(isValid);
    }, [muscleGroups])

    const [routineNameBool, setRoutineNameBool] = useState(false);
    useEffect(() => {
        if(routineName === ""){
            setRoutineNameBool(false);
        } else{
            setRoutineNameBool(true);
        }
    }, [routineName])
    
    const validInput =
        routineNameBool &&
        muscleGroupBool &&
        exercisesBool;

    const handleAddMuscleGroup = () => {
        setMuscleGroups([...muscleGroups, ""]);
    };

    const handleAddExercise = (index: number) => {
        const newExercises = [...exercises];
        if (newExercises[index]?.length) {
            newExercises[index] = [...newExercises[index], { name: "" }];
        } else {
            newExercises[index] = [{ name: "" }];
        }
        setExercises(newExercises);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, muscleGroupIndex: number, exerciseIndex?: number) => {
        if (exerciseIndex === undefined) {
            const newMuscleGroups = [...muscleGroups];
            newMuscleGroups[muscleGroupIndex] = event.target.value;
            setMuscleGroups(newMuscleGroups);
        } else {
            const newExercises = [...exercises];
            newExercises[muscleGroupIndex][exerciseIndex].name = event.target.value;
            setExercises(newExercises);

            const isEmpty = newExercises.some((group) => group.some((exercise) => exercise.name === ""));
            setExercisesBool(!isEmpty);
        }
    };

    const stringData = window.localStorage.getItem('savedRoutines');
    const data: routines[] = stringData?JSON.parse(stringData):[];
    const[savedRoutines, setSavedRoutines] = useState<routines[]>(data);

    const [submitted, setSubmitted] = useState(false);
    const [wasValid, setWasValid] = useState(false);

    function submit(){

        setWasValid(validInput);
        setSubmitted(true);
        if(validInput){
            //const routine = { routineName, muscleGroups, exercises };
            //console.log(routine);

            const routineSave: routines={
                routineName, muscleGroups, exercises
            };
            const newData = [...savedRoutines, routineSave];
            setSavedRoutines(newData);
            //console.log(newData);
            window.localStorage.setItem('savedRoutines', JSON.stringify(newData));

            returnToDefault();
        }
    }

    function returnToDefault() {
        setRoutineName("");
        setMuscleGroups([]);
        setExercises([]);
        setSavedRoutines([]);
    }
    
    return (
        <div>
            <Label
                className="routines-label"
                text="Routine Name:"/>
            <input
                className="routine-input"
                id="routineName"
                type="text"
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}/>

            {muscleGroups.map((muscleGroup, muscleGroupIndex) => (
                <div key={`muscleGroup-${muscleGroupIndex}`}>
                        <Label
                            className="routines-label"
                            text={`Muscle group ${muscleGroupIndex + 1}:`}/>
                    <input
                        className="routine-input"
                        id={`muscleGroup-${muscleGroupIndex}`}
                        type="text"
                        value={muscleGroup}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, muscleGroupIndex)}/>
                    {exercises[muscleGroupIndex]?.map((exercise, exerciseIndex) => (
                        <div key={`exercise-${muscleGroupIndex}-${exerciseIndex}`}>
                            <Label
                                className="routines-label"
                                text={`Exercise ${exerciseIndex + 1}:`}/>
                            
                            <input
                                className="routine-input"
                                id={`exercise-${muscleGroupIndex}-${exerciseIndex}`}
                                type="text"
                                value={exercise.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, muscleGroupIndex, exerciseIndex)}/>
                        </div>
                    ))}
                    <button className="routine-button" type="button" onClick={() => handleAddExercise(muscleGroupIndex)}>
                        Add Exercise
                    </button>
                </div>
            ))}

            <button className="routine-button" type="button" onClick={handleAddMuscleGroup}>
                Add Muscle Group
            </button>
            <br/>
            <ClassicButton
                className="routine-button"
                text="Submit routine"
                type="button"
                id="submitRoutine"
                onClick={submit}/>
           
            {submitted && !wasValid&& 
                <TimedDisplay
                className="timed-display"
                text="Your input is incorrect"
                time={3000}
                show={submitted}
                setShow={setSubmitted}/>
            }
            {submitted && wasValid && 
                <TimedDisplay
                className="timed-display"
                text="Your input is correct"
                time={3000}
                show={submitted}
                setShow={setSubmitted}/>
            }
        </div>
    );
}

export default NewRoutine;