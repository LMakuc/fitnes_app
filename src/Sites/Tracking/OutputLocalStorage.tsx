import React, {useState, ChangeEvent, useEffect, useCallback} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar'
import Label from '../../Labels/Label'
import ClassicButton from '../../Buttons/ClassicButton';

type Exercise = {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
    comment: string;
}

type Props = {
    savedExercises: Exercise[];
}

function OutputLocalStorage({savedExercises}:Props){
    
    //input and validation of date
    const [inputDate, setInputDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        setInputDate(new Date(e.target.value));
        getExerciseNames();
    }
    const [dateBool, setDateBool] = useState(true);
    useEffect(()=>{
        if(inputDate<=new Date()){
            setDateBool(true);
        } else {
            setDateBool(false);
        }
    }, [inputDate]);

    //elements in local storage saved into a state exercises
    const stringData = window.localStorage.getItem('savedExercises');
    const data: Exercise[] = stringData?JSON.parse(stringData) : [];
    const [exercises, setExercises] = useState<Exercise[]>(data);

    useEffect(() => {
        window.localStorage.setItem('savedExercises', JSON.stringify(exercises));
    },[exercises])
    
    const getExerciseNames = useCallback(() => {
        const dateFilteredExercises = exercises.filter((exercise) =>
            new Date(exercise.date).getDay() === inputDate.getDay() &&
            new Date(exercise.date).getMonth() === inputDate.getMonth() &&
            new Date(exercise.date).getFullYear() === inputDate.getFullYear()
        );
        //console.log(dateFilteredExercises);
    
        const exerciseNames: string[] = [];
        dateFilteredExercises.forEach((exercise) => {
            if (!exerciseNames.includes(exercise.exercise)) {
                exerciseNames.push(exercise.exercise);
            }
        });
    
        return exerciseNames;
    }, [exercises, inputDate]);


    const deleteExerciseTable = useCallback((name: string) => {
        const updatedExercises = exercises.filter((exercise) => exercise.exercise !== name);
        window.localStorage.setItem('savedExercises',JSON.stringify(updatedExercises));
        setExercises(updatedExercises);
        setExerciseNames(getExerciseNames());
    }, [exercises, getExerciseNames]);
    
    const [exerciseNames, setExerciseNames] = useState<string[]>([]);
    useEffect(() => {
        const exerciseNames = getExerciseNames();
        //console.log(exerciseNames);
        setExerciseNames(exerciseNames);
    }, [exercises, inputDate])

    const outputTables = exerciseNames.map((name) => (
            <div>
                <ClassicButton
                    className="delete-exercise-table-button"
                    text="Delete exercise"
                    type="button"
                    id="deleteExerciseTable"
                    onClick={() => deleteExerciseTable(name)}/>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}>{name}</th>
                        </tr>
                        <tr>
                            <th>Set</th>
                            <th>Rep/duration</th>
                            <th>Weight</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises
                            .filter((outputExercise) => 
                                new Date(outputExercise.date).getDay() === inputDate.getDay() &&
                                new Date(outputExercise.date).getMonth() === inputDate.getMonth() &&
                                new Date(outputExercise.date).getFullYear() === inputDate.getFullYear() &&
                                outputExercise.exercise === name)
                            .map((outputExercise, i) => (
                                <tr>
                                    <td>{outputExercise.set}</td>
                                    <td>{outputExercise.rep}</td>
                                    <td>{outputExercise.weight}</td>
                                    <td>{outputExercise.comment}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    ));
        
    function deleteAllExercises(){
        localStorage.removeItem('savedExercises');
        setExercises([]);
        setExerciseNames([]);
    }

    return(
        
        <div>
            <div>
                <ClassicButton
                    className="delete-local-storage-button"
                    type="button"
                    text="Delete all exercises"
                    onClick={deleteAllExercises}/>
            </div>
            <div className="tracking-title">Exercise output</div>
            
            <div className="output-form">
                <div>
                    <Label
                        className="calendar-label"
                        text="Input date for output:"/>
                </div>
                <div>
                    <DisplayCalendar
                        className="calendar"
                        id="calendar"
                        type="date"
                        value={inputDate.toLocaleDateString("en-CA")}
                        onChange={getNewDate}/>
                </div>
                <div className="wrong-input">
                    {!dateBool && 
                        <div>
                            Wrong input. Date must be today or in the past.
                        </div>
                    }
                </div>
            </div>
            {true && 
                outputTables
            }
        </div>
    );
}

export default OutputLocalStorage;