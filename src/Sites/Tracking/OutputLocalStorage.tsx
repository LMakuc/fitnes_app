import React, {useState, ChangeEvent, useEffect} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar'
import Label from '../../Labels/Label'
import ClassicButton from '../../Buttons/ClassicButton';
import Tracking from './Tracking';

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
    
    function deleteExercise(i: number) {
        console.log(exercises);
        
        //deleting element of a table
        setExercises((prevState) =>
            prevState.filter((prevItem, index) => index !== i)
        );
    }

    const outputData = exercises.map((outputExercise, i)=>
        <div key={i}>
            {new Date(outputExercise.date).getDay() === inputDate.getDay() &&
            new Date(outputExercise.date).getMonth() === inputDate.getMonth() &&
            new Date(outputExercise.date).getFullYear() === inputDate.getFullYear() &&
                <div className="output-exercise">
                    <div>Date: {new Date(outputExercise.date).toLocaleDateString()}</div>
                    <div>Exercise: {outputExercise.exercise} </div>
                    <div>Set: {outputExercise.set}</div>
                    <div>Rep: {outputExercise.rep}</div>
                    {outputExercise.weight !=="0kg" && outputExercise.weight !=="0" &&
                        <div>Weight: {outputExercise.weight}</div>
                    }
                    {outputExercise.comment!=="/" && 
                        <div>Comment: {outputExercise.comment}</div>
                    }
                    <ClassicButton
                        className="delete-one-exercise-button"
                        text="Delete"
                        onClick={()=>{
                            <Tracking
                                output={false}
                                index={i}
                                deleteOneExercise={()=>{
                                    deleteExercise(i);
                                }}
                                />
                            //deleteExercise(i);
                        }}/>
                </div>
            }
        </div>
    )

    return(
        
        <div>
            
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
                outputData
            }
        </div>
    );
}

export default OutputLocalStorage;