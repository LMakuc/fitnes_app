import React, {useState, ChangeEvent, MouseEvent} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar';
import SaveExerciseButton from '../../Buttons/SaveExerciseButton';
import ExerciseWeightInput from './Form/ExerciseWeightInput';
import ChangeSetRepValue from '../../Buttons/ChangeSetValueButton';
import SetRepInput from './Form/SetRepInput';
import SaveExercise from './SaveExercise';
import Label from '../../Labels/Label';
import OutputLocalStorage from './OutputLocalStorage';
import DeleteLocalStorageButton from '../../Buttons/DeleteLocalStorageButton';

type Exercise = {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
}

function Tracking(){
    
    const [date, setDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        validateDateInput();
        setDate(new Date(e.target.value));
    }
    //console.log(date);

    const [exercise, setExercise] = useState("");
    function inputExercise(e: ChangeEvent<HTMLInputElement>){
        setExercise(e.target.value);
    }

    const [set, setSet] = useState(1);
    function incrementSet(e: MouseEvent<HTMLElement>){
        setSet(set+1);
    }
    function decrementSet(e: MouseEvent<HTMLElement>){
        if(set-1 > 0){
            setSet(set-1);
        }
        else{
            setSet(1);
        }
    }
    function inputSet(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setSet(1);
        }
        else{
            setSet(parseInt(e.target.value));
        }
    }

    const [rep, setRep] = useState(1);
    function incrementRep(e: MouseEvent<HTMLElement>){
        setRep(rep+1);
    }
    function decrementRep(e: MouseEvent<HTMLElement>){
        if((rep-1)>0){
            setRep(rep-1);
        }
        else{
            setRep(1);
        }
    }
    function inputRep(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setRep(1);
        }
        else{
            setRep(parseInt(e.target.value));
        }
    }

    const [weight, setWeight] = useState("0kg");
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(e.target.value);
    }

    const [submitted, setSubmitted] = useState(false);
    function changeSubmittedBool(val: boolean){
        setSubmitted(val);
    }
    const [dateBool, setDateBool] = useState(true);
    function validateDateInput(){ 
        if(new Date(date)>new Date()){
            setDateBool(true);
        } else {
            setDateBool(false);
        }
        console.log("Date first: " + dateBool);
    }

    const [exerciseBool, setExerciseBool]=useState(false);
    function validateExeciseInput(e: ChangeEvent<HTMLInputElement>){
        setExerciseBool(e.target.value !== "");
    }

    function saveExercise(){
        console.log("Submit button clicked.")

        changeSubmittedBool(true);

        if(dateBool && exerciseBool){
            console.log("Correct input");

            const exerciseSave: Exercise = {
                date, exercise, set, rep, weight
            }
            console.log(exerciseSave);
            const newData = [...savedExercises, exerciseSave];
            setSaveExercises(newData);
            window.localStorage.setItem('savedExercises', JSON.stringify(newData));
            

            returnValuesToDefault();
        } 
    }

    const stringData = window.localStorage.getItem('savedExercises');
    const data: Exercise[] = stringData?JSON.parse(stringData) : [];
    const [savedExercises, setSaveExercises] = useState<Exercise[]>(data);

    function returnValuesToDefault(){
        setDate(new Date());
        setSet(1);
        setRep(1);
        setWeight("0kg");
    }

    function deleteExercises(){
        localStorage.removeItem('savedExercies');
        setSaveExercises([]);
    }
    

    console.log("Exercise bool: " + exerciseBool);
    console.log("Date bool: " + dateBool);
    console.log("Submitted: " + submitted);

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
                    <div className="wrong-input">
                        {!dateBool && 
                            <div>
                                Wrong input. Date must be today or in the past.
                            </div>
                        }
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
                            onChange={inputExercise}
                            onBlur={validateExeciseInput}/>
                    </div>
                    <div className="wrong-input">
                        {!exerciseBool && submitted &&
                            <div>
                                Wrong input. You must input exercise name.
                            </div>
                        }
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
            <SaveExerciseButton
                className="save-exercise-button"
                type="button"
                text="Submit exercise"
                onClick={saveExercise}/>
            <SaveExercise
                savedExercises={savedExercises}/>
            <div>
                <DeleteLocalStorageButton
                    className="delete-local-storage-button"
                    text="Delete exercises"
                    onClick={deleteExercises}/>
            </div>
            <OutputLocalStorage
                savedExercises={savedExercises}/>
        </div>
    );
}

export default Tracking;