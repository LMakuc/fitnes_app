import React, {useState, ChangeEvent} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar'
import Label from '../../Labels/Label'

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
    
    const outputData = savedExercises.map((outputExercise, i)=>
            <div className="output-exercise" key={i}>
                    <div>
                        <div>Date: {new Date(outputExercise.date).toLocaleDateString()}</div>
                        <div>Exercise: {outputExercise.exercise} </div>
                        <div>Rep: {outputExercise.rep}</div>
                        <div>Set: {outputExercise.set}</div>
                        <div>Weight: {outputExercise.weight}</div>
                        {outputExercise.comment!=="No comment" && 
                            <div>Comment: {outputExercise.comment}</div>
                        }
                    </div>
        </div>
    )

    const [dateBool, setDateBool] = useState(true);
    function validateDateInput(){ 
        if(new Date(inputDate)>new Date()){
            setDateBool(true);
        } else {
            setDateBool(false);
        }
        console.log("Date first: " + dateBool);
    }

    const [inputDate, setInputDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        validateDateInput();
        setInputDate(new Date(e.target.value));
    }

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