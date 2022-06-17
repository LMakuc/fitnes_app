import React, {useState, ChangeEvent, MouseEvent} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar';
import SaveExerciseButton from '../../Buttons/SaveExerciseButton';
import ExerciseWeightInput from './Form/ExerciseWeightInput';
import ChangeSetRepValue from '../../Buttons/ChangeSetValueButton';
import SetRepInput from './Form/SetRepInput';
import SaveExercise from './SaveExercise';
import Label from './Form/Label';
import IncorrectInput from './Form/IncorrectInput';

function Tracking(){
    
    const [date, setDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        setDate(new Date(e.target.value));
    }
    //console.log(date);

    const [exercise, setExercise] = useState("");
    function inputExercise(e: ChangeEvent<HTMLInputElement>){
        setExercise(e.target.value);
    }

    const [set, setSet] = useState(0);
    function incrementSet(e: MouseEvent<HTMLElement>){
        setSet(set+1);
    }
    function decrementSet(e: MouseEvent<HTMLElement>){
        if(set-1 > 0){
            setSet(set-1);
        }
        else{
            setSet(0);
        }
    }
    function inputSet(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setSet(0);
        }
        else{
            setSet(parseInt(e.target.value));
        }
    }

    const [rep, setRep] = useState(0);
    function incrementRep(e: MouseEvent<HTMLElement>){
        setRep(rep+1);
    }
    function decrementRep(e: MouseEvent<HTMLElement>){
        if((rep-1)>0){
            setRep(rep-1);
        }
        else{
            setRep(0);
        }
    }
    function inputRep(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setRep(0);
        }
        else{
            setRep(parseInt(e.target.value));
        }
    }

    const [weight, setWeight] = useState("0kg");
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(e.target.value);
    }

    const [exerciseBool, setExerciseBool]=useState(false);
    const [setBool, setSetBool]=useState(false);
    const [repBool, setRepBool]=useState(false);
    function booleanSet(){
        if(!(exercise==="")){
            setExerciseBool(true);
        } else{
            setExerciseBool(false);
        }
        if(!(set===0)){
            setSetBool(true);
        } else{
            setSetBool(false);
        }
        if(!(rep===0)){
            setRepBool(true);
        } else{
            setRepBool(false);
        }
        if(exerciseBool && setBool && repBool){
            changeWrite();
        }
    }
    const [write, setWrite] = useState(false);
    function changeWrite(){
        if(write){
            setWrite(false);
        }
        else{
            setWrite(true);
        }
    }

    return(
        <div className="tracking-body">
            <div className="tracking-title">Exercise input</div>
            <div>
                <div className = "display-date-exercise-weight">
                    <div>
                        <Label
                            className="calendar-label"
                            text="Input date: "/>
                    </div>
                    <div>
                        <DisplayCalendar
                            className="calendar"
                            id="calendar"
                            type="date"
                            value={date.toLocaleDateString("en-CA")}
                            onChange={getNewDate}/>
                    </div>
                </div>
                <div className="display-date-exercise-weight">
                    <div>
                        <Label
                            className="exercise-label"
                            text="Input exercise: "/>
                    </div>
                    <div>
                        <ExerciseWeightInput
                            className="exercise-weight-input"
                            id="exerciseInput"
                            type="text"
                            name="exerciseInput"
                            value={exercise}
                            onChange={inputExercise}/>
                    </div>
                </div>
                <div className="display-set-rep">
                    <div>
                        <Label
                            className="set-label"
                            text="Input set: "/>
                    </div>
                    <div>
                        <ChangeSetRepValue
                            className="decrement-set-rep"
                            text="-"
                            id="decrement-set"
                            onClick={decrementSet}/>
                        <SetRepInput
                            className="set-rep-input"
                            id="setInput"
                            type="text"
                            name="setInput"
                            value={set}
                            onChange={inputSet}/>
                        <ChangeSetRepValue
                            className="increment-set-rep"
                            text="+"
                            id="increment-set"
                            onClick={incrementSet}/>
                    </div>
                </div>
                <div className="display-set-rep">
                    <div>
                        <Label
                            className="rep-label"
                            text="Input duration/reps: "/>
                    </div>
                    <div>
                        <ChangeSetRepValue
                            className="decrement-set-rep"
                            text="-"
                            id="decrement-rep"
                            onClick={decrementRep}/>
                        <SetRepInput
                            className="set-rep-input"
                            id="repInput"
                            type="text"
                            name="repInput"
                            value={rep}
                            onChange = {inputRep}/>
                        <ChangeSetRepValue
                            className="increment-set-rep"
                            text="+"
                            id="increment-rep"
                            onClick={incrementRep}/>
                    </div>
                </div>
                <div className="display-date-exercise-weight">
                    <div>
                        <Label  
                            className="wieght-label"
                            text="Weight: "/>
                    </div>
                    <div>
                        <ExerciseWeightInput
                            className="exercise-weight-input"
                            id="weight-input"
                            type="text"
                            name="weightInput"
                            value={weight}
                            onChange={inputWeight}/>
                    </div>
                </div>
            </div>
            <div>
                <SaveExerciseButton
                    className="save-exercise-button"
                    type="button"
                    text="Submit exercise"
                    onClick={booleanSet}/>
            </div>
            <div>
                {write && 
                    <SaveExercise
                        date={date.toLocaleDateString("en-CA")}
                        exercise={exercise}
                        set={set}
                        rep={rep}
                        weight={weight}/>
                }
                {!write &&
                    <IncorrectInput
                        exerciseBool={exerciseBool}
                        setBool={setBool}
                        repBool={repBool}/>
                }
            </div>
        </div>
    );
}

export default Tracking;